import "./../styles.css"
import ItemCount from "../ItemCount"
import {useState} from "react"
import { Link } from "react-router-dom"
import { actions } from "./CartContext"
import { useContext } from "react"

const ItemDetail = ({item}) => {

    const [contador, setcontador] = useState()
    const {agregarNave} = useContext(actions)

    const handleOnAdd = (contador) => {
        agregarNave(item.contador)
        console.log(contador);
        setcontador(contador)
    }

    return (
        <div className="ItemDetail">
            <h2>Clase de nave : <i>{item.nave.name}</i></h2>
            <img src={item.nave.img_url} alt={item.nave.name} className="ItemImg"/>
            <h4>Modelo de nave : <i>{item.nave.model}</i></h4>
            <p>{item.nave.description}</p>
            {contador === 0? <Link to="/cart"><button><b>finalizar compra</b></button></Link>: <ItemCount model={item.nave.name} stock={item.nave.stock} onAdd={handleOnAdd} initial={1}/>}
        </div>
    )
}

export default ItemDetail