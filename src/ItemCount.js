import { arrayRemove } from "firebase/firestore";
import {useState} from "react"

const ItemCount = ({ onAdd, initial, stock, model, cost }) => {

    const [count, setcounter] = useState(1);

    const agregar = () => {
        if (count < stock) {
            setcounter(count + 1);
        }
        console.log("otra para la flota")
    }
    const eliminar = () => {
        if (count > initial) {
            setcounter(count - 1);
        }
        console.log("chatarra para Jawas")
    }

    return (
        <section>
            <div className="ItemCount">
            <p>Cantidad de naves disponibles clase <i>{model}</i> : {stock}</p>
                <div>
                <p>Tus naves: {count}</p>
                <p>El precio seria: {count*cost} 000</p>
                    <button onClick={agregar}><b>aumentar</b></button>
                    <button onClick={eliminar}><b>disminuir</b></button>
                    <button onClick={() => onAdd(count)} type='button'>
                    <b>Agrega a tu flota</b>
                    </button>
                </div>
            </div>
        </section>
        
    )
}

export default ItemCount;