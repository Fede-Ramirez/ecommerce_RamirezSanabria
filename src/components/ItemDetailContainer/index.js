import { useState, useEffect} from "react"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { ItemDetail } from "../ItemDetail"

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        setLoading(true)
        customFetch(products)
            .then(res =>{
                 setLoading(false)
                 setListProduct(res.find(item => item.id === 1))
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