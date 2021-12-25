import Item from "./Item"
import "./../styles.css"

const ItemList = ({naves}) => {

    return (
        <div>
            <ul className="ListGroup">
            {naves.filter((naves) => naves.bando === "Republica Galactica").map(naves =>(
            <Item producto={naves} key={naves.nave} bando={naves.bando} naves={naves}/>
            ))}
        </ul>
        </div>
    )
}

export default ItemList