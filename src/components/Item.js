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
                    {naves.faccion}
                </h2>
            </div>
            <img src={naves.flag} alt={naves.faccion} className="ItemImg"/>
            <ItemCount stock={naves.stock} onAdd={handleOnAdd} initial={10}/>
        </div>
    )
}

export default Item;