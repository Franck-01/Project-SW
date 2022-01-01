import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="inferno">
            <Link to="/cart"><button><img src="images/inferno_2.png"/></button></Link>
        </div>
    )
}

export default CartWidget;