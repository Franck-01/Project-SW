import Header from "./Header"
import Principal from "./Principal"

const App = () => {

    const naves = [
        { bando : "Republica Galactica", cazas : "ARC-170", interceptores : "Ala-V", bombarderos : "Ala-Y"},
        { bando : "Alianza Separatista", cazas : "Droides Buitre", interceptores : "Tri-caza", bombarderos : "Hiena"},
        { bando : "Imperio Galactico", cazas : "TIE Fighter", interceptores : "TIE Interceptor", bombarderos : "Bomber TIE"},
        { bando : "Alianza Rebelde", cazas : "Ala-X", interceptores : "Ala-A", bombarderos : "Ala-Y"},
    ]
    
    return (
        <div>
            <Header naves={naves} presenta="Estas son los tipos de naves mas comunes"/>
            <Principal />
        </div>
    )
}

export default App;