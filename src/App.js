import './App.css';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <>
        <Navbar/>
        {/* <ItemListContainer greeting="Bienvenidos a Filolearning!"/> */}
        <ItemDetailContainer />
    </>
  )
}

export default App;
