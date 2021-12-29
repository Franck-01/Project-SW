import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {Routes,Route} from "react-router-dom"

const Principal = () => {

    return (
        <>
            <Routes>
                <Route path="/categorias/:bando" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </>
    )
}

export default Principal