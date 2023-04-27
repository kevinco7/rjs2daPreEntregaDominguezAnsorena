import NavBar from './components/navbar/Navbar';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
     <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
