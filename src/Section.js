import {useState} from "react"

const Section = () => {

    const cazInit = 0
    const [caz, setContador] = useState(cazInit)
    const CCazas = () => {
        console.log("Cazas clase ARC-170")
        setContador(caz + 30)
    }
    const cazas = () => {
        setContador(caz - 30)
    }

    return (
        <section>
            <div className="section">
            <h1>Crea tu flota</h1>
                <p>cantidad de cazas clase ARC-170 : {caz}</p>
                <button onClick={CCazas}>aumentar</button>
                <button onClick={cazas}>disminuir</button>
            </div>
        </section>
        
    )
}

export default Section;