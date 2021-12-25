import ItemCount from "../ItemCount";
import "./../styles.css"

const Item = ({naves}) => {
    
    const handleOnAdd = () => {
        console.log("otra a la lista");
    }

    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {naves.nave.name} 
                </h2>
            </div>
            <img src={naves.nave.img_url} alt={naves.nave.name} className="ItemImg"/>
            <h4>{naves.nave.model}</h4>
                <p>{naves.nave.description}</p>
            <ItemCount stock={naves.stock} onAdd={handleOnAdd} initial={1}/>
            
        </div>
    )
}

export default Item;