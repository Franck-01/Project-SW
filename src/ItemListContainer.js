import React from 'react';
import ItemList from './components/ItemList'
import "./styles.css"
import { useState, useEffect } from "react"

const naves = [
    { faccion: "Republica Galctica", flag:"http://pm1.narvii.com/6285/0abadec238bd7f41a9348356f40bb891411416b7_00.jpg"},
    { faccion: "Alianza Separatista", flag:"https://pm1.narvii.com/6439/4b30c61839e4d26bf630955bcc4e0d6b2d625fd6_hq.jpg"},
    { faccion: "Imperio Galactico", flag:"http://pm1.narvii.com/6234/ea8781f4d3eb3cd255ff518b8ebb9fb815624f94_00.jpg"},
    { faccion: "Alianza Rebelde", flag:"https://wallpapercave.com/wp/wp2149431.jpg"}
]

const ItemListContainer = () => {

    const [mensaje, setMensaje] = useState("cargando los archivos...")
    const [productos,setProductos] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                if (Math.random() > 0.5) {
                    res(naves)
                }else{
                    rej()
                }
            }, 2000)

        })
        promesa
            .then((resultado) => {
                setMensaje("Todo bien")
                setProductos(resultado)
            })
            .catch(() => {
                setMensaje("Algo fallo")
            })
    }, [])

    return (
        <div className="ItemListContainer">
            <p className='mensaje'>{mensaje}</p>
            <ItemList productos={productos} naves={naves} />
        </div>

    )
}

export default ItemListContainer
