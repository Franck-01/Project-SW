import { createContext, useState } from "react"
import Cart from "./Cart"

export const actions = createContext()

const { Target } = actions

const CartContext = ({children}) => {
    const [flota, setFlota] = useState([])

    const agregarNave = (ship,counter) => {
        if (IsInCart(ship.name)){
            console.log("Ya tienes esta nave")
        }else{
            console.log("Agregando nave")
            ship.counter = counter;
            setFlota([flota, ship])
        }
    }
    console.log(flota)

    const IsInCart = (name) => {
        console.log(name)
            const selector = flota.find((naves)=> naves.nave.name === name)
            console.log(selector)
    }

    const eliminarNave = (ship) => {
        setFlota(ship)
    }

    const Estado = {
        flota,
        agregarNave,
        eliminarNave,
    }

    return <Target value = {Estado}>
                <Cart children={children}/>
            </Target>
}

export default CartContext