import "./../styles.css"
import ItemCount from "../ItemCount"
import {useState} from "react"
import { Link } from "react-router-dom"
import { context } from "./CartContext"
import { useContext } from "react"

const ItemDetail = ({naves}) => {

    const [contador, setcontador] = useState()
    const {addShip} = useContext(context)

    const handleOnAdd = (contador) => {
        addShip(naves, contador)
        setcontador(contador)
    }

    return (
        <div className="ItemDetail">
            <h2>Clase de nave : <i>{naves.name}</i></h2>
            <img src={naves.img_url} alt={naves.name} className="ItemImg"/>
            <h4>Modelo de nave : <i>{naves.model}</i></h4>
            <p>{naves.description}</p>
            <Link to="/"><button><b>Volver al inicio</b></button></Link>{contador? <Link to="/cart"><button><b>finalizar compra</b></button></Link>: <ItemCount model={naves.name} stock={naves.stock} onAdd={handleOnAdd} initial={1}/>}
        </div>
    )
}

export default ItemDetail