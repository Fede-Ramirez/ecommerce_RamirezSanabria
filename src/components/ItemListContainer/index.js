import { ItemList } from "../ItemList"
import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Button, Flex, Heading} from "@chakra-ui/react"
import { toast } from "react-toastify"
import { db } from "../../firebase" 
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { category } = useParams()

    useEffect(() => {
        
        const productsCollection = collection(db, "products")
        if(!category) {
            const consult = getDocs(productsCollection)

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
                toast.error("Error al cargar los productos")
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
                toast.error("Error al cargar los productos")
            })
        }
    }, [category])

    return (
        <main>
            <Flex direction="column" justify="center" alignItems="center">
                <Heading as="h1" m={5}>{greeting}</Heading>
                {!loading ? <ItemList listProducts={listProducts}/> : <Button isLoading loadingText="Cargando..."></Button>} 
            </Flex>
        </main>
    )
}

export { ItemListContainer }