import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"
import { useParams } from 'react-router';
import { store } from './firebase';
import { collection, getDocs, query, where, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [item, setItems] = useState([])

    const porSector = async () => {
         const listado = collection(store, "naves")
        const reff = doc(listado, id)
        const documento = await getDocs(reff)
        setItems({...documento.data(), id: documento.id})
    } 
     

    useEffect(() => {

        porSector()

    },[id])

    
    return (
        <div>
            <ItemDetail naves={item[0]}/>
        </div>
    )
    
}

export default ItemDetailContainer
