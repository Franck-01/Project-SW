import { useEffect, useState } from "react"
import "./styles.css"
import ItemDetail from "./components/ItemDetail"
import { useParams } from 'react-router';
import { store } from './firebase';
import { getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const {id} = useParams();
    console.log("id : ", id)
    const [item, setItems] = useState([])


    useEffect(() => {

        getDoc(doc(store, "naves", id))
        .then((queryn) => {
            const listado = { id: queryn.id, ...queryn.data() }
            setItems(listado)
        }).catch((error) => {
            console.log("surgio un error", error)
        })
        
        return (() => {
            setItems()
        })
 
    },[id])

    
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
    
}

export default ItemDetailContainer
