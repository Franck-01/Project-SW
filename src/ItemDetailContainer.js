import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"
import { useParams } from 'react-router';
import { store } from './firebase';
import { collection, getDocs, query, where, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [item, setItems] = useState([])

    const reset = (arraydoc) => {
        setItems(arraydoc.map(documento=>{
            return {...documento.data(), id: documento.id}
        }))
    }

    const pedido = async () =>{

        const listado = collection(store, "naves")
        const referencia = doc(listado, id)
        const documento = await getDocs(referencia)
        setItems({ ...documento.data(), id: documento.id})
    }
    const porSector = async () => {
        const listado = collection(store, "naves")
        const cont1 = where("name", "==", id)
        const queryn = query(listado, cont1)
        const consulta = await getDocs(queryn)
        reset(consulta.docs)
    }
     

    useEffect(() => {

        if(id){
            porSector()
        }else{
            pedido()
        }
    },[id])

    
    return (
        <div>
            <ItemDetail item={item[0]}/>
        </div>
    )
    
}

export default ItemDetailContainer
