import Header from "./Header"
import Principal from "./Principal"

const naves = [
    { bando : "Republica Galactica", cazas : "ARC-170", interceptores : "Ala-V", bombarderos : "Ala-Y"},
    { bando : "Alianza Separatista", cazas : "Droides Buitre", interceptores : "Tri-caza", bombarderos : "Hiena"},
    { bando : "Imperio Galactico", cazas : "TIE Fighter", interceptores : "TIE Interceptor", bombarderos : "Bomber TIE"},
    { bando : "Alianza Rebelde", cazas : "Ala-X", interceptores : "Ala-A", bombarderos : "Ala-Y"},
]

const App = () => {

    const republic = { bando: "Republica Galactica" }
    const saludo = "Bienvenido a la Armada"

    return (
        <div>
            <Header naves={republic} saludo={saludo}/>
            <Principal />
        </div>
    )
}

export default App;