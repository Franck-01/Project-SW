import ItemCount from "./ItemCount"
import NavBar from "./components/NavBar"
import ItemListContainer from "./ItemListContainer"

const Principal = () => {

    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting="Inspeccionando la flota"/>
            <ItemCount/>
        </div>
    )
}

export default Principal