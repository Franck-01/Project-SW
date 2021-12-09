import Header from "./Header"
import Principal from "./Principal"
import { useState, useEffect } from "react"

const naves = [
    { bando : "Republica Galactica", cazas : "ARC-170", interceptores : "Ala-V", bombarderos : "Ala-Y"},
    { bando : "Alianza Separatista", cazas : "Droides Buitre", interceptores : "Tri-caza", bombarderos : "Hiena"},
    { bando : "Imperio Galactico", cazas : "TIE Fighter", interceptores : "TIE Interceptor", bombarderos : "Bomber TIE"},
    { bando : "Alianza Rebelde", cazas : "Ala-X", interceptores : "Ala-A", bombarderos : "Ala-Y"},
]

const App = () => {

    const republic = { bando: "Republica Galactica" }
    const saludo = "Bienvenido a la Armada"

    const [mensaje, setMensaje] = useState("cargando los archivos...")
    const [productos,setProductos] = useState([])

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
                setMensaje("Todo bien")
                setProductos(resultado)
            })
            .catch(() => {
                setMensaje("Algo fallo")
            })
    }, [])

    return (
        <div>
            <Header naves={republic} saludo={saludo}/>
            <Principal productos={productos}>
                <p>{mensaje}</p>
            </Principal>
        </div>
    )
}

export default App;