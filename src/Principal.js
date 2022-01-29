import ItemListContainer from "./ItemList/ItemListContainer"
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer"
import {Routes,Route} from "react-router-dom"
import Cart from "./Cart/Cart"

const Principal = () => {

    return (
        <>
            <Routes>
                <Route path="/categorias/:bando" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default Principal