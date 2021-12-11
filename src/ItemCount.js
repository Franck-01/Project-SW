import {useState} from "react"

const ItemCount = ({ onAdd, initial }) => {

    const stockA = 20;
    const stockB = 300;
    const stockC = 240;
    const stockD = 300;
    const [dest, contadorA] = useState(1);
    const [caz, contadorB] = useState(30);
    const [bomb, contadorC] = useState(12);
    const [inter, contadorD] = useState(10);

    const CDestructores = () => {
        if (dest < stockA) {
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
        if (caz < stockB) {
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
        if (bomb < stockC) {
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
        if (inter < stockD) {
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