import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from "./context/CartContext"
import './firebase.js'

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category/product/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App;
