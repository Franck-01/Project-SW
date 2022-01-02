import React from 'react';
import ItemList from './components/ItemList'
import "./styles.css"
import { useState, useEffect } from "react"
import naves from "./components/naves.json"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const {bando} = useParams();
    console.log(bando)
    
    const [mensaje, setMensaje] = useState("cargando los archivos...")
    const [productos,setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                if (bando) {
                    const filtro = naves.filter((naves) => naves.bando === bando)
                    res(filtro)
                }else{
                    res(naves)
                }
            }, 2000)
        })
        promesa
            .then((resultado) => {
                setMensaje("")
                setProductos(resultado)
            })
            .catch(() => {
                setMensaje("Algo fallo")
            })
    }, [bando])
    
    return (
        <div className="ItemListContainer">
            <p className='mensaje'>{mensaje}</p>
            <ItemList productos={productos}/>
        </div>

    )
}

export default ItemListContainer
