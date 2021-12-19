import { useEffect, useState } from "react"
import "./../styles.css"

const ItemDetail = ( {item}) => {

    const [items, setItems] = useState([])

    useEffect(()=>{

        fetch('https://mocki.io/v1/b3b2e087-740b-4413-9ab7-3732ce11737f')
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
            .catch(err=>console.log(err))

    },[])

    return (
        <div>
            <ul>
            {items.map(items=>(
                <li key={items.name}>
                    <h3>{items.name}</h3>
                    <h4>{items.model}</h4>
                    <p>{items.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ItemDetail