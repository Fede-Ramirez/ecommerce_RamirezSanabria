import { Item } from "../Item"
import { Flex } from "@chakra-ui/react"

const ItemList = ({ listProducts }) => {

  return (
    <Flex flexDirection="row" flexWrap="wrap">    
      {listProducts.map(product => <Item key={product.id} product={product}/>)}
    </Flex>
  )
}

export { ItemList }