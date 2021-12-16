import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {Routes,Route} from "react-router-dom"

const Principal = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categorias/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemListContainer/>}/>
            </Routes>
        
        <ItemDetailContainer/>
        </>
    )
}

export default Principal