import { Link } from "react-router-dom";
import "./../styles.css"

const Item = ({naves}) => {
    
    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    Clase de nave : <i>{naves.nave.name} </i>
                </h2>
            </div>
            <h3><Link to={`/item/${naves.nave.name}`}>detalles</Link></h3>
            <img src={naves.nave.img_url} alt={naves.nave.name} className="ItemImg"/>
            <h4>Modelo de nave : <i>{naves.nave.model}</i></h4>
            
        </div>
    )
}

export default Item;