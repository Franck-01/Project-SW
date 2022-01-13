import { createContext, useState, memo} from "react"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState([])
        console.log(fleet)
        
    const addShip = (ship, count) => {
        if (IsInCart(ship.name)){
            const duplicated= fleet.find((duplicatedShip)=> duplicatedShip.name === ship.name)
            duplicated.count = duplicated.count + count
            const rest= fleet.filter((restShip)=> restShip.name !== ship.name)
            setFleet([...rest, duplicated])
            console.log("Ya tienes esta nave")
        }else{
            console.log("Agregando nave")
            ship.count = count
            setFleet([...fleet, ship])
        }
    }

    const IsInCart = (name) => fleet.some((naves)=> naves.name === name)

    const deleteShip = (ship) => {
        setFleet(fleet.filter((remove)=> remove.name !== ship.name)
    )}

    const clearFleet = () => {
        setFleet([])  
    }

    return (
        <Provider value = {{fleet, addShip, IsInCart, deleteShip, clearFleet}}>
            {children}
        </Provider>
    )
}

export default memo(CartContext)