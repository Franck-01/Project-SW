import "../styles.css"
import ItemCount from "../Item/ItemCount"
import {useState} from "react"
import { Link } from "react-router-dom"
import { context } from "../context/CartContext"
import { useContext } from "react"

const ItemDetail = ({item}) => {

    const [count, setCount] = useState(0)
    const {addShip, IsInCart, addFleet} = useContext(context)

    const handleOnAdd = (x) => {
        setCount(count + x)
        itemAdd(x)
    }
    const itemAdd = (count) =>{
        if(IsInCart(item.name)){
            addShip(item.name, count, item.stock)
        }else{
            addFleet(item, count)
        }
    }

    return (
        <div className="ItemDetail">
            <div className="estilo">
                <h2>Clase de nave : <i>{item.name}</i></h2>
                <img src={item.img_url} className="ItemImg"/>
                <h4>Modelo de nave : <i>{item.model}</i></h4>
                <p>{item.description}</p>
                {count? <Link to="/cart"><button><b>finalizar compra</b></button></Link>: <ItemCount cost={item.cost} stock={item.stock} onAdd={handleOnAdd} initial={0}/>}
            </div>
        </div>
    )
}

export default ItemDetail