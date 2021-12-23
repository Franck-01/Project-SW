import ItemCount from "../ItemCount";
import "./../styles.css"
import {Link} from 'react-router-dom';

const Item = ({naves}) => {
    
    const handleOnAdd = () => {
        console.log("otra a la lista");
    }

    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {naves.name}
                </h2>
            </div>
            <img src={naves.img_url} alt={naves.name} className="ItemImg"/>
            <h4>{naves.model}</h4>
                <p>{naves.description}</p>
            <ItemCount stock={naves.stock} onAdd={handleOnAdd} initial={1}/>
            <Link to={"item/$(productos.id)"} >Detalles</Link>
            
        </div>
    )
}

export default Item;