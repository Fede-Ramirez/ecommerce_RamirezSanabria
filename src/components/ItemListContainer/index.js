import { ItemCount } from "../ItemCount"
import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect} from "react"

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProducts(res)
            })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            {!loading ? <ItemList listProducts={listProducts}/> : <strong>Cargando...</strong>}
            {/* <ItemCount initial={1} stock={10} onAdd={() =>{}}/> */}
        </>
    )
}

export { ItemListContainer }