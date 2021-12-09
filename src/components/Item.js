import ItemCount from "../ItemCount";
import "./../styles.css"

const Item = ({naves}) => {
    
    const handleOnAdd = () => {
        console.log("agregaste el producto al carrito");
    }

    return (
        <div className="CardItem">
            <div className="ContainerItem">
                <h2 className="ItemHeader">
                    {naves.faccion}
                </h2>
            </div>
            <ItemCount onAdd={handleOnAdd}/>
        </div>
    )
}

export default Item;