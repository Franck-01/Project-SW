import Header from "./Header"
import ItemListContainer from "./ItemListContainer"

const naves = [
    { bando : "Republica Galactica", cazas : "ARC-170", interceptores : "Ala-V", bombarderos : "Ala-Y"},
    { bando : "Alianza Separatista", cazas : "Droides Buitre", interceptores : "Tri-caza", bombarderos : "Hiena"},
    { bando : "Imperio Galactico", cazas : "TIE Fighter", interceptores : "TIE Interceptor", bombarderos : "Bomber TIE"},
    { bando : "Alianza Rebelde", cazas : "Ala-X", interceptores : "Ala-A", bombarderos : "Ala-Y"},
]
console.log(naves)

const App = () => {
    
    return (
        <div>
            <Header/>
            <ItemListContainer greeting="Inspeccionando la flota"/>
        </div>
    )
}

export default App;