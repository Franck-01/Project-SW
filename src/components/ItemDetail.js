import "./../styles.css"
import ItemCount from "../ItemCount"
import {useState} from "react"
import { Link } from "react-router-dom"
import { context } from "./CartContext"
import { useContext } from "react"

const ItemDetail = ({item}) => {

    const [contador, setcontador] = useState()
    const {addShip} = useContext(context)

    const handleOnAdd = (contador) => {
        addShip(item, contador)
        setcontador(contador)
    }

    return (
        <div className="ItemDetail">
            <h2>Clase de nave : <i>{item.name}</i></h2>
            <img src={item.img_url} className="ItemImg"/>
            <h4>Modelo de nave : <i>{item.model}</i></h4>
            <p>{item.description}</p>
            {contador? <Link to="/cart"><button><b>finalizar compra</b></button></Link>: <ItemCount model={item.name} stock={item.stock} onAdd={handleOnAdd} initial={1}/>}
        </div>
    )
}

export default ItemDetail