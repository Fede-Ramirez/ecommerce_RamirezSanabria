import { useState, useEffect} from "react"
// import { products } from "../../utils/products"
// import { customFetch } from "../../utils/customFetch"
import { ItemDetail } from "../ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../firebase" 
import { collection, getDoc, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()

    useEffect (() => {

        const productsCollection = collection(db, "products")

        const reference = doc(productsCollection, id)

        const consult = getDoc(reference)

        console.log(consult) 

        consult
        .then((res)=>{
            setListProduct(res.data())
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
        })

        // setLoading(true)
        // customFetch(products)
        //     .then(res =>{
        //         setLoading(false)
        //         setListProduct(res.find(item => item.id === parseInt(id)))
        //     })
    }, [id])

    return (
        <>  
            {!loading ? <ItemDetail listProduct={listProduct}/> : <strong>Cargando...</strong>}
        </>
    )
}

export { ItemDetailContainer }