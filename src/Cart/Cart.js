import { useContext, useState} from "react";
import "../styles.css"
import { context } from "../context/CartContext";
import {store} from "../firebase/firebase"
import { addDoc, collection } from "firebase/firestore"
import validator from "validator"
import { toast } from "react-toastify"
const Cart = () => {
    const {fleet, deleteShip, clearFleet, totalSum} = useContext(context)
    
    const [nombre, setNombre] = useState("")
    const [error, setError] = useState("")

    const valida = validator.isAlpha(nombre)
    
    const compra = async () =>{
        if(valida){
            const orden = {
                productos: fleet,
                usuario: {
                    nombre,
                },
                total: 100
            }
            const ordenCollection = collection(store, "ordenes")
            const reff = await addDoc(ordenCollection, orden)
            const id = reff.id
            clearFleet()
            setNombre("")
            setError("")
            toast.success("compra exitosa")
        }else{
            const fail = "Intenta solo con letras"
            setError(fail)
            toast.error(fail)
        }
        
    }

    return (
        <>   
            <h2>Aqui esta tu flota:</h2>
            <button onClick={compra} className="botones">guardar compra</button>
            <button onClick={()=>{clearFleet(fleet)}} className="botones">Borrar todo</button>
                <div className="back">
                    <ul>
                    {fleet.map((element) =>(
                        <li>
                            <h2>{element.name}</h2>
                            <h3>{element.model}</h3>
                            <img src={element.img_url} alt={element.name} className="ItemImg"/>
                            <h3>cantidad de naves : {totalSum(fleet)}</h3>
                            <button onClick={()=>{deleteShip(element.name)}}>Borrar elemento</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </>
    )
}
export default Cart ; 