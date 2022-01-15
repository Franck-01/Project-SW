import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const {count} =useContext(context)

    return (
        <div className="inferno">
            <Link to="/cart">
                <button><img src="https://raw.githubusercontent.com/Franck-01/Project-SW/master/public/images/inferno_2.png"/></button>
                {count}
            </Link>
        </div>
    )
}

export default CartWidget;