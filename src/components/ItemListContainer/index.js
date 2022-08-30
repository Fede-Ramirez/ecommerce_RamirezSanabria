import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
// import { customFetch } from "../../utils/customFetch"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase" 


const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { category } = useParams()
    
    useEffect(() => {
        
        const productsCollection = collection(db, "products")

        const consult = getDocs(productsCollection)

        console.log(consult)

        consult 
        .then(snapshot => {
            const listProducts = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            setListProducts(listProducts)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })

        // setLoading(true)
        // // customFetch(products)
        //     .then(res => {
        //         if (category) {
        //             setLoading(false)
        //             setListProducts(res.filter(product => product.category === category))
        //         } else {
        //             setLoading(false)
        //             setListProducts(res)
        //         }
        //     })
    }, [category])

    return (
        <>
            <h1>{greeting}</h1>
            {/* {!loading ? <ItemList listProducts={listProducts}/> : <strong>Cargando...</strong>} */}
            <ItemList listProducts={listProducts}/>
        </>
    )
}

export { ItemListContainer }