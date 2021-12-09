import ItemListContainer from "./ItemListContainer"

const Principal = ({productos,children}) => {

    return (
        <>
        <div>
            {children}

            {productos.map((elemento,indice)=>{
                return <p>{elemento.nombre}</p>
            })}
        </div>
        <ItemListContainer/>
        </>
    )
}

export default Principal