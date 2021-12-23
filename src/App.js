import Header from "./Header"
import Principal from "./Principal"
import { BrowserRouter, Router} from "react-router-dom"
import Events from "./Events"
import Footer from "./Footer"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Events/>
                <Principal/>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;