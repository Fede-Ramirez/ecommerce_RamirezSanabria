import { ItemCount } from "../ItemCount"
import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect} from "react"

const ItemListContainer = ({greeting}) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res)
            })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            {!loading ? <ItemList listProduct={listProduct}/> : <strong>Cargando...</strong>}
            {/* <ItemCount initial={1} stock={10} onAdd={() =>{}}/> */}
        </>
    )
}

export { ItemListContainer }