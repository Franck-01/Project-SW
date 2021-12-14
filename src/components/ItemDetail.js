import { useEffect, useState } from "react"
import "./../styles.css"

const ItemDetail = () => {

    const [item, setItems] = useState([])

    useEffect(()=>{

        fetch('https://mocki.io/v1/aa5c9f7b-1137-4b79-9875-b398ba281af4')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
            .catch(err=>console.log(err))

    },[])

    return (
        <div>
            <ul>
            {item.map(item=>(
                <li key={item.name}>
                    <h3>{item.name}</h3>
                    <h4>{item.model}</h4>
                    <p>{item.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ItemDetail