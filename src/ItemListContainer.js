import React from 'react';
import ItemList from './components/ItemList'
import "./styles.css"

const ItemListContainer = () => {

    const naves = [
        { faccion: "Republica Galctica"},
        { faccion: "Alianza Separatista"},
        { faccion: "Imperio Galactico"},
        { faccion: "Alianza Rebelde"}
    ]

    return (
        <div className="ItemListContainer">
            <ItemList naves={naves} />
        </div>

    )
}

export default ItemListContainer
