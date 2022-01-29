import { createContext, useState, memo} from "react"

export const context = createContext()

export const {Provider} = context;

const CartContext =({children}) => {
    const [fleet, setFleet] = useState([])
        
    const addFleet = (ship, counter)=>{
        const products = {
            name: ship.name,
            cost: ship.cost,
            counter: counter,
            img_url: ship.img_url,
            model: ship.model,
            description: ship.description,
        } 
        setFleet([...fleet, products])
    }

    const totalSum =(array) =>{
        let count = 0;
        array.forEach(ship => count += ship.cost*ship.counter)
        count.toFixed(2)
        return count
    }

    const countShip = () =>{
        let count = 0
        fleet.forEach(prod =>{
            count += prod.counter
        })
        return count
    }

    const addShip = (ship, count) => {
        if (IsInCart(ship.name)){
            const duplicated= fleet.find((duplicatedShip)=> duplicatedShip.name === ship.name)
            duplicated.count = duplicated.count + count
            const rest= fleet.filter((restShip)=> restShip.name !== ship.name)
            setFleet([...rest, duplicated])
        }else{
            ship.count = count
            setFleet([...fleet, ship])
        }
    }

    const IsInCart = (name) => fleet.some((naves)=> naves.name === name)

    const deleteShip = (id) => {
        const borrar = fleet.filter((remove)=> remove.id !== id)
        setFleet(borrar)
    }

    const clearFleet = () => {
        setFleet([])
    }

    return (
        <Provider value = {{fleet, addShip, IsInCart, deleteShip, clearFleet, countShip, totalSum, addFleet}}>
            {children}
        </Provider>
    )
}

export default memo(CartContext)