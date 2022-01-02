import { createContext, useState, useContext } from "react"
import naves from "./naves.json"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState(naves)

    const addShip = (ship) => {
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