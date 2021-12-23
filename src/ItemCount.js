import {useState} from "react"

const ItemCount = ({ onAdd, initial }) => {

    const stock = 100;
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
            <div className="section">
            <p>Cantidad de naves disponibles: {stock}</p>
                <div>
                <p>Tus naves: {counter}</p>
                    <button onClick={agregar}>aumentar</button>
                    <button onClick={eliminar}>disminuir</button>
                    <button onClick={() => onAdd()} type='button'>
                        Agrega a tu flota
                    </button>
                </div>
            </div>
        </section>
        
    )
}

export default ItemCount;