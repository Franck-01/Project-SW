import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const ship = ("https://mocki.io/v1/54c1f335-fa24-4adc-8e5e-a519387f384d")
    const {bando} = useParams();

    const [mensaje, setMensaje] = useState("Cargando API...")
    const [item, setItems] = useState([])
    
    useEffect(()=>{

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                if (bando) {
                    const filtro = ship.filter((ship)=> ship.bando === bando)
                    res(filtro)
                }else{
                    res(ship)
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
