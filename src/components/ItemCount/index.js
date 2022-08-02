import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    
    const increase = () => count < stock && setCount (count + 1) 
    const decrease = () => count > initial && setCount (count - 1) 

    return (
        <div id="contador">
            <button onClick={decrease} id="decrease">-</button>
            <p>{count}</p>
            <button onClick={increase} id="increase">+</button>
            <button id="add">Agregar al carrito</button>
        </div>
        )
}

export { ItemCount }