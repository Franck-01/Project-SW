import {useState , useEffect} from "react"

const naves = [
    { bando : "Republica Galactica", cazas : "ARC-170", interceptores : "Ala-V", bombarderos : "Ala-Y"},
    { bando : "Alianza Separatista", cazas : "Droides Buitre", interceptores : "Tri-caza", bombarderos : "Hiena"},
    { bando : "Imperio Galactico", cazas : "TIE Fighter", interceptores : "TIE Interceptor", bombarderos : "Bomber TIE"},
    { bando : "Alianza Rebelde", cazas : "Ala-X", interceptores : "Ala-A", bombarderos : "Ala-Y"},
]

const ItemCount = () => {

    const [listo,carga] = useState("cargando los archivos...")
    const [objeto,respuesta] = useState([])

    useEffect(() => {

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                if (Math.random() > 0.5) {
                    res(naves)
                }else{
                    rej()
                }
            }, 2000)
        })
        promesa
            .then((resultado) => {
                carga("Todo salio bien")
                respuesta(resultado)
            })
            .catch(() => {
                carga("Todo salio Mal")
            })
    }, [])


    const destInit = 0
    const [dest, contadorA] = useState(destInit)
    const CDestructores = () => {
        console.log("Destructores clase Venator")
        contadorA(dest + 1)
    }
    const destructores = () => {
        contadorA(dest - 1)
    }
    const cazInit = 0
    const [caz, contadorB] = useState(cazInit)
    const CCazas = () => {
        console.log("Cazas clase ARC-170")
        contadorB(caz + 30)
    }
    const cazas = () => {
        contadorB(caz - 30)
    }
    const bombInit = 0
    const [bomb, contadorC] = useState(bombInit)
    const CBombarderos = () => {
        console.log("Bombarderos clase Ala-Y")
        contadorC(bomb + 12)
    }
    const bombarderos = () => {
        contadorC(bomb - 12)
    }
    const interInit = 0
    const [inter, contadorD] = useState(interInit)
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
            <h3>{objeto}</h3>
            <h3>{listo}</h3>
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

export default ItemCount;