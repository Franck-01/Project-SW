import {useState} from "react"

const Republic = () => {

    const destInit = 0
    const [dest, contadorA] = useState(destInit)
    const cazInit = 0
    const [caz, contadorB] = useState(cazInit)
    const bombInit = 0
    const [bomb, contadorC] = useState(bombInit)
    const interInit = 0
    const [inter, contadorD] = useState(interInit)
    const CDestructores = () => {
        console.log("Destructores clase Venator")
        contadorA(dest + 1)
    }
    const destructores = () => {
        contadorA(dest - 1)
    }
    const CCazas = () => {
        console.log("Cazas clase ARC-170")
        contadorB(caz + 30)
    }
    const cazas = () => {
        contadorB(caz - 30)
    }
    const CBombarderos = () => {
        console.log("Bombarderos clase Ala-Y")
        contadorC(bomb + 12)
    }
    const bombarderos = () => {
        contadorC(bomb - 12)
    }
    const CInterceptores = () => {
        console.log("Interceptores clase Ala-V")
        contadorD(inter + 10)
    }
    const interceptores = () => {
        contadorD(inter - 10)
    }

    return (
        <section>
            <div className="section">
            <h1>Crea tu flota</h1>
            <p>cantidad de destructores clase Venator : {dest}</p>
                <button onClick={CDestructores}>aumentar</button>
                <button onClick={destructores}>disminuir</button>
            <p>cantidad de cazas clase ARC-170 : {caz}</p>
                <button onClick={CCazas}>aumentar</button>
                <button onClick={cazas}>disminuir</button>
            <p>cantidad de bombarderos clase Ala-Y : {bomb}</p>
                <button onClick={CBombarderos}>aumentar</button>
                <button onClick={bombarderos}>disminuir</button>
            <p>cantidad de interceptores clase Ala-V : {inter}</p>
                <button onClick={CInterceptores}>aumentar</button>
                <button onClick={interceptores}>disminuir</button>
            </div>
        </section>
        
    )
}

export default Republic;