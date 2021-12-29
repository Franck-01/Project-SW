import "./../styles.css"
import ItemCount from "../ItemCount"
import {useState} from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {

    const [agregado, setagregado] = useState(false)
    const [contador, setcontador] = useState()

    const handleOnAdd = (contador) => {
        console.log(contador);
        setagregado(true)
        setcontador(contador)
    }
    

    return (
        <div>
            <ul>
                <li>
                    <h2>Clase de nave : <i>{item.nave.name}</i></h2>
                    <img src={item.nave.img_url} alt={item.nave.name} className="ItemImg"/>
                    <h4>Modelo de nave : <i>{item.nave.model}</i></h4>
                    <p>{item.nave.description}</p>
                    {agregado? <Link to=""><button>finalizar compra</button></Link>:<ItemCount model={item.nave.name} stock={item.nave.stock} onAdd={handleOnAdd} initial={1}/>}
                </li>
            </ul>
        </div>
    )
}

export default ItemDetail