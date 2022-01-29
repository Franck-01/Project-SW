import {useState} from "react"

const ItemCount = ({ onAdd, initial, stock, cost }) => {

    const [count, setCount] = useState(0);

    const validate = () => {
        onAdd(count)
      }

    const agregar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const eliminar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <section>
            <div className="ItemCount">
                <p>Tus naves: {count} / <i>{stock} : cantidad disponible</i></p>
                <p>Costo por nave: <i>{cost} 000</i></p>
                <p>El precio seria: {(count*cost).toFixed(2)} 000</p>
                    <button onClick={agregar}><b>aumentar</b></button>
                    <button onClick={eliminar}><b>disminuir</b></button>
                    <button onClick={() => onAdd(validate)} type='button'>
                    <b>Agrega a tu flota</b>
                    </button>
            </div>
        </section>
        
    )
}

export default ItemCount;