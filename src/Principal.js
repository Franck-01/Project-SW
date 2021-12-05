import Section from "./Section"
import NavBar from "./components/NavBar"
import ItemListContainer from "./ItemListContainer"

const Principal = () => {

    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting="Inspeccionando la flota"/>
            <Section/>
        </div>
    )
}

export default Principal