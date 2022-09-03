import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { db } from "../../firebase" 
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {

    const [client, setClient] = useState({
        name: ' ',
        lastname: ' ',
        email: ' ',
        phone:' ',
        address: ' ',
    })

    const [submit, setSubmit] = useState(false)

    const { cartList, totalPrice, cleanCart } = useCartContext()

    const navigate = useNavigate()

    const handlerChangeInput = (e) => {
        setClient({
            ...client, 
            [e.target.name]: e.target.value
        })
    }

    const confirmOrder = (e) => {

        e.preventDefault()

        const order = {
            items: cartList,
            total: totalPrice(),
            buyer: {...client},
            date: serverTimestamp(),
        }
        
        const ordersCollection = collection(db, 'orders')
    
        const consult = addDoc(ordersCollection, order)
    
        consult
            .then((res)=> {
                console.log(res.id)
            })
            .catch(err => {
                console.log(err)
            })

        setSubmit(true)    
    }

    if (cartList.length === 0) {

        setTimeout(() => {
            navigate('/')
        }, 5000)

        return (
            <>
                <h1>Error, no tienes productos en el carrito</h1>
                <strong>Serás redirigido al inicio en 5 segundos...</strong>
            </>
        )
    }

    return (
        <div>
            <h2>Por favor, ingresa tus datos para proceder con la compra</h2>
            <form onSubmit={confirmOrder}>
                <input type='text' placeholder='Nombre' name='name' value={client.name} onChange={handlerChangeInput} required/>
                <input type='text' placeholder='Apellido' name='lastname' value={client.lastname} onChange={handlerChangeInput} required/>
                <input type='email' placeholder='Correo electrónico' name='email' value={client.email} onChange={handlerChangeInput} required/>
                <input type='number' placeholder='Número de teléfono' name='phone' value={client.phone} onChange={handlerChangeInput} required/>
                <input type='text' placeholder='Domicilio' name='address' value={client.address} onChange={handlerChangeInput} required/>
                <button type='submit'>Confirmar compra</button>
            </form>
            <hr/>
            {
                submit 
                &&
                <>
                    <div>
                        <h3>Tu orden de compra es 1, muchas gracias!</h3>
                        <Link to={'/'}><button onClick={()=> cleanCart()}>Ir al inicio</button></Link>
                    </div>
                </>
            }
        </div>
    )
}

export { Checkout }