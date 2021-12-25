import { useEffect, useState } from "react"
import "./../styles.css"

const ItemDetail = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{

        fetch("https://mocki.io/v1/54c1f335-fa24-4adc-8e5e-a519387f384d")
            .then(res=>res.json())
            .then(json=>{
                setItems(json)
            })
            .catch(err=>console.log(err))

    },[])

    return (
        <div>
            <ul>
            {items.filter((items) => items.bando === "Republica Galactica").map(items=>(
                <li key={items.nave.name}>
                    <h3>{items.nave.name}</h3>
                    <h4>{items.nave.model}</h4>
                    <p>{items.nave.description}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ItemDetail