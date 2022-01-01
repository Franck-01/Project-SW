import Header from "./Header"
import Principal from "./Principal"
import { BrowserRouter, Router} from "react-router-dom"
import Footer from "./Footer"
import CartContext from "./components/CartContext"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <Header/>
                    <Principal/>
                </CartContext>    
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;