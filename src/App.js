import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { Checkout } from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext"
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './firebase.js'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
            <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category/product/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Footer/>
          <ToastContainer/> 
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
