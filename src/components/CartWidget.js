import { Link } from "react-router-dom";
import { context } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {

    const respuesta = useContext(context)
    console.log(respuesta)

    return (
        <div className="inferno">
            <Link to="/cart"><button><img src="https://raw.githubusercontent.com/Franck-01/Project-SW/master/public/images/inferno_2.png"/></button></Link>
        </div>
    )
}

export default CartWidget;