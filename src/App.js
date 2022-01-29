import Header from "./Header"
import Principal from "./Principal"
import { BrowserRouter} from "react-router-dom"
import Footer from "./Footer"
import CartContext from "./context/CartContext"
import  {ToastContainer} from "react-toastify"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <CartContext>
                    <Header/>
                    <Principal/>
                    <ToastContainer/>
                </CartContext>    
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;