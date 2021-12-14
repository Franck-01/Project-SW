import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"

const ItemDetailContainer = () => {

    const [mensaje, setMensaje] = useState("Cargando...")
    const [item, setItems] = useState([])

    useEffect(()=>{

        const promesa = new Promise((rep, rej) => {

            setTimeout(() => {
                if (Math.random() > 0.5) {
                    rep('https://mocki.io/v1/aa5c9f7b-1137-4b79-9875-b398ba281af4')
                }else{
                    rej()
                }
            }, 2000)
        })
        promesa
            .then((resultado) => {
                setMensaje("Todo bien")
                setItems(resultado)
            })
            .catch(() => {
                setMensaje("Algo fallo")
            })
    },[])

    if(item.length === 0){
        return (
            <div>
                <h1>{mensaje}</h1>
            </div>
        )
    }else{
        return (
            <div>
                <ItemDetail/>
            </div>
        )
    }
}

export default ItemDetailContainer
