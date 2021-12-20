import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"

const ItemDetailContainer = () => {

    const [mensaje, setMensaje] = useState("Cargando API...")
    const [item, setItems] = useState([])

    useEffect(()=>{

        const promesa = new Promise((rep, rej) => {

            setTimeout(() => {
                if (Math.random() > 0.5) {
                    rep('https://mocki.io/v1/b3b2e087-740b-4413-9ab7-3732ce11737f')
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
                setMensaje("Cargando los archivos")

            })
    },[])

    if(item.length === 0){
        return (
            <div>
                <h1>{mensaje}</h1>
                {useEffect}
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
