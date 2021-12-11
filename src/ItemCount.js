import {useState} from "react"

const ItemCount = ({ stock, onAdd, initial }) => {

    const [dest, contadorA] = useState(20);
    const [caz, contadorB] = useState(300);
    const [bomb, contadorC] = useState(240);
    const [inter, contadorD] = useState(300);

    const CDestructores = () => {
        if (dest < stock) {
            contadorA(dest + 1);
        }
        console.log("Destructores estelares")
    }
    const destructores = () => {
        if (dest > initial) {
            contadorA(dest - 1);
        }
    }
    const CCazas = () => {
        if (caz < stock) {
            contadorB(caz + 5);
        }
        console.log("Cazas de combate")
    }
    const cazas = () => {
        if (caz > initial) {
            contadorB(caz - 5);
        }
    }
    const CBombarderos = () => {
        if (bomb < stock) {
            contadorC(bomb + 3);
        }
        console.log("Bombarderos de presicion")
    }
    const bombarderos = () => {
        if (bomb > initial) {
            contadorC(bomb - 3);
        }
    }
    const CInterceptores = () => {
        if (inter < stock) {
            contadorD(inter + 2);
        }
        console.log("Interceptores de escolta")
    }
    const interceptores = () => {
        if (inter > initial) {
            contadorD(inter - 2);
        }
    }

    return (
        <section>
            <div className="section">
            <p>{dest}</p>
            <p>{caz}</p>
            <p>{bomb}</p>
            <p>{inter}</p>
                <div>
                <p>cantidad de destructores: {dest}</p>
                    <button onClick={CDestructores}>aumentar</button>
                    <button onClick={destructores}>disminuir</button>
                <p>cantidad de cazas: {caz}</p>
                    <button onClick={CCazas}>aumentar</button>
                    <button onClick={cazas}>disminuir</button>
                <p>cantidad de bombarderos: {bomb}</p>
                    <button onClick={CBombarderos}>aumentar</button>
                    <button onClick={bombarderos}>disminuir</button>
                <p>cantidad de interceptores: {inter}</p>
                    <button onClick={CInterceptores}>aumentar</button>
                    <button onClick={interceptores}>disminuir</button>
                    <button onClick={() => onAdd()} type='button'>
                        Agrega a tu flota
                    </button>
                </div>
            </div>
        </section>
        
    )
}

export default ItemCount;