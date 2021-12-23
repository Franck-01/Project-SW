import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const URL = ("https://mocki.io/v1/b3b2e087-740b-4413-9ab7-3732ce11737f")
    const {id} = useParams();

    const [mensaje, setMensaje] = useState("Cargando API...")
    const [item, setItems] = useState([])
    
    useEffect(()=>{

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                if (id) {
                    const filtro = URL.filter((x)=> x.id === Number(id))
                    res(filtro)
                }else{
                    res(URL)
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
