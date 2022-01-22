import { useContext, useState } from "react";
import "./../styles.css"
import { context } from "./CartContext";
import { store } from "../firebase";
import {addDoc, collection} from "firebase/firestore"
import validator from "validator"
import { toast } from "react-toastify"
const Cart = () => {
    const {fleet, deleteShip, clearFleet, count} = useContext(context)
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [error, setError] = useState("")
    const guardado = async ()=> {
        const valido = validator.isAlpha(nombre)
        if(valido){
            setLoading(true)
            const compra ={
                compra: fleet,
                usuario: {
                    nombre,
                    email: "email@email.com",
                    telefono: "135792468"
                },
                total: 100
            }
            const ordenCollection = collection(store, "compra")
            const reff = await addDoc(ordenCollection, compra)
            const id = reff.id
            setLoading(false)
            setId(id)
            clearFleet()
            setNombre("")
            setError("")
            toast.success("Compra exitosa")
        }else{
            const alert = "Nombre erroneo"
            setError(alert)
            toast.error(alert)
        }
    }
    return (
        <>   
            <h2>Aqui esta tu flota:</h2>
                <div className="back">
                    <ul>
                    {fleet.map((element) =>(
                        <li>
                            <h2>{element.name}</h2>
                            <h3>{element.model}</h3>
                            <img src={element.img_url} alt={element.name} className="ItemImg"/>
                            <h3>cantidad de naves : {count}</h3>
                            <button onClick={()=>{deleteShip(element.name)}}>Borrar elemento</button>
                            <button onClick={()=>{clearFleet(fleet)}}>Borrar todo</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </>
    )
}
export default Cart ; 