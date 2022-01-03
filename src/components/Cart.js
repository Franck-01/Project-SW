import "./../styles.css"

const Cart = ({children}) => {

    return (
        <>
            <div>
                <h2>Aqui esta tu flota:</h2>
                <div className="back">
                    <p>{children}</p>
                </div>
            </div>
        </>
    )
}

export default Cart ; 