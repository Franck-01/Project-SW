import { createContext, useState, memo} from "react"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState([])
        console.log(fleet)
        
    const addShip = (ship, count) => {
        if (IsInCart(ship.nave.name)){
            const duplicated= fleet.find((duplicatedShip)=> duplicatedShip.nave.name === ship.nave.name)
            duplicated.count = duplicated.count + count
            const rest= fleet.filter((restShip)=> restShip.nave.name !== ship.nave.name)
            setFleet([...rest, duplicated])
            console.log("Ya tienes esta nave")
        }else{
            console.log("Agregando nave")
            ship.count = count
            setFleet([...fleet, ship])
        }
    }

    const IsInCart = (name) => fleet.some((naves)=> naves.nave.name === name)

    const deleteShip = (ship) => {
        setFleet(fleet.filter((remove)=> remove.nave.name !== ship.nave.name)
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