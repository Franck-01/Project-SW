import {useState} from "react"

const ItemCount = ({ onAdd, initial, stock, model }) => {

    const [counter, setcounter] = useState(1);

    const agregar = () => {
        if (counter < stock) {
            setcounter(counter + 1);
        }
        console.log("otra para la flota")
    }
    const eliminar = () => {
        if (counter > initial) {
            setcounter(counter - 1);
        }
        console.log("chatarra para Jawas")
    }

    return (
        <section>
            <div className="ItemCount">
            <p>Cantidad de naves disponibles clase <i>{model}</i> : {stock}</p>
                <div>
                <p>Tus naves: {counter}</p>
                    <button onClick={agregar}><b>aumentar</b></button>
                    <button onClick={eliminar}><b>disminuir</b></button>
                    <button onClick={() => onAdd(counter)} type='button'>
                    <b>Agrega a tu flota</b>
                    </button>
                </div>
            </div>
        </section>
        
    )
}

export default ItemCount;