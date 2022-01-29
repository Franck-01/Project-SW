import React from 'react';
import ItemList from './ItemList'
import "../styles.css"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { store } from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const {bando} = useParams();
    const [productos,setProductos] = useState([])

    const reset = (arraydoc) => {
        setProductos(arraydoc.map(documento=>{
            return {...documento.data(), bando: documento.bando}
        }))
    }

    const pedido = async () =>{

        const listado = collection(store, "naves")
        const consulta = await getDocs(listado)
        reset(consulta.docs)
    }
    const porSector = async () => {
        const listado = collection(store, "naves")
        const cont1 = where("bando", "==", bando)
        const queryn = query(listado, cont1)
        const consulta = await getDocs(queryn)
        reset(consulta.docs)
    }
     

    useEffect(() => {

        if(bando){
            porSector()
        }else{
            pedido()
        }

    }, [bando])

    return (
        <div className="ItemListContainer">
            <ItemList productos={productos}/>
        </div>

    )
}

export default ItemListContainer
