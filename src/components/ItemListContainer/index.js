import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProducts(res.filter(product => product.category === category))
                } else {
                    setLoading(false)
                    setListProducts(res)
                }
            })
    }, [category])

    return (
        <>
            <h1>{greeting}</h1>
            {!loading ? <ItemList listProducts={listProducts}/> : <strong>Cargando...</strong>}
        </>
    )
}

export { ItemListContainer }