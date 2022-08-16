import './App.css'
import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
          <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenidos a Filolearning!"/>} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
