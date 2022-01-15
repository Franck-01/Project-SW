import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./CartContext";

const CartWidget = () => {

    const {count} =useContext(context)

    return (
        <div className="inferno">
            <Link to="/cart">
                <button><img src="https://raw.githubusercontent.com/Franck-01/Project-SW/master/public/images/inferno_2.png"/></button>
            </Link>
            cantidad de naves: {count}
        </div>
    )
}

export default CartWidget;