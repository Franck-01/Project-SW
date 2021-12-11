import Item from "./Item"
import "./../styles.css"

const ItemList = ({naves}) => {

    return (
        <div>
            <ul className="ListGroup">
            {naves.map(naves =><Item producto={naves} key={naves.faccion} naves={naves}/>)}
        </ul>
        </div>
    )
}

export default ItemList