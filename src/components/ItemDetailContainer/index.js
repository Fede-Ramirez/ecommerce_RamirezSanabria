import { useState, useEffect} from "react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { ItemDetail } from "../ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()

    useEffect (() => {
        setLoading(true)
        customFetch(products)
            .then(res =>{
                setLoading(false)
                setListProduct(res.find(item => item.id === parseInt(id)))
            })
    }, [])

    console.log(listProduct)

    return (
        <>  
            {!loading ? <ItemDetail listProduct={listProduct}/> : <strong>Cargando...</strong>}
        </>
    )
}

export { ItemDetailContainer }