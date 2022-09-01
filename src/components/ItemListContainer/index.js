import { ItemList } from "../ItemList"
// import { products } from "../../utils/products"
// import { customFetch } from "../../utils/customFetch"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { db } from "../../firebase" 
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { category } = useParams()
    // const { id } = useParams()

    useEffect(() => {
        
        const productsCollection = collection(db, "products")
        if(!category) {
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
        } else {
            const filter = query(productsCollection, where("category","==",category))

            const consult = getDocs(filter)

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
        }
        
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
            {!loading ? <ItemList listProducts={listProducts}/> : <strong>Cargando...</strong>}
        </>
    )
}

export { ItemListContainer }