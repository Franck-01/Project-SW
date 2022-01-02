import "./../styles.css"

const Cart = ({children}) => {

    return (
        <>
            <div className="back">
                <h2>Aqui esta tu flota:</h2>
                <p>{children}</p>
            </div>
        </>
    )
}

export default Cart ; 