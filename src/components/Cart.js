import { useContext } from "react";
import { Link } from "react-router-dom";
import "./../styles.css"
import { context } from "./CartContext";

const Cart = () => {
    const {fleet, deleteShip, clearFleet} = useContext(context)

    return (
        <>   
            <Link to="/"><button className="boton"><b>Volver al inicio</b></button></Link>
            <h2>Aqui esta tu flota:</h2>
                <div className="back">
                    <ul>
                    {fleet.map((element) =>(
                        <li>
                            <h2>{element.nave.name}</h2>
                            <h3>{element.nave.model}</h3>
                            <img src={element.nave.img_url} alt={element.nave.name} className="ItemImg"/>
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