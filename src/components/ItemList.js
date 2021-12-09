import Item from "./Item"
import "./../styles.css"

const ItemList = ({naves}) => {

    return (
        <div>
            <ul className="ListGroup">
            {naves.map(naves =><Item key={naves.facciones} naves={naves}/>)}
        </ul>
        </div>
    )
}

export default ItemList