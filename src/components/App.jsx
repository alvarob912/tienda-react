import './app.css'
import Navbar from './Navbar/Navbar';
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import Home from './Home/Home';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"BIENVENIDOS"}/>
      <Home/>
    </>
  );
}

export default App;
