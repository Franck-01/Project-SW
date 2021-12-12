import "./../styles.css"

const ItemDetail = ({item}) => {

    return (
        <div>
            <ul>
                {item.map(item=>(
                    <li key={item.name}>{item.description}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemDetail