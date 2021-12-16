import { useEffect, useState } from "react"
import "./../styles.css"

const ItemDetail = () => {

    const [item, setItems] = useState([])

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