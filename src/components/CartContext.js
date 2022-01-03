import { createContext, useState} from "react"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState([])

    const addShip = (ship, count) => {
        if (IsInCart(ship)){
            console.log("Ya tienes esta nave")
        }else{
            console.log("Agregando nave")
            setFleet([...fleet, ship])
        }
    }

    const IsInCart = (name) => {
            const selector = fleet.some((naves)=> naves.name === name)
            console.log(selector)
    }

    const deleteShip = (ship) => {
        setFleet(ship)
    }

    const Status = {
        fleet,
        addShip,
        deleteShip
    }

    return (
        <Provider value = {Status}>
            {children}
        </Provider>
    )
}

export default CartContext