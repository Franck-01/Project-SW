import Item from "./Item"
import "./../styles.css"

const ItemList = ({productos}) => {

    return (
        <div>
            <ul className="ListGroup">
            {productos.map(naves =>(
            <Item producto={naves} key={naves.nave} bando={naves.bando} naves={naves}/>
            ))}
        </ul>
        </div>
    )
}

export default ItemList