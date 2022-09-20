import { useState, useEffect} from "react"
import { ItemDetail } from "../ItemDetail"
import { useParams } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { toast } from "react-toastify" 
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

        consult
        .then((res)=>{
            const listProduct = {
                ...res.data(),
                id:res.id
            }
            setListProduct(listProduct)
            setLoading(false)
        })
        .catch((err) => {
            toast.error("Error al cargar el producto")
        })
    }, [id])

    return (
        <>  
            {!loading ? <ItemDetail listProduct={listProduct}/> : <Button isLoading loadingText="Cargando..."></Button>}
        </>
    )
}

export { ItemDetailContainer }