import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NavBarPsi from "./components/navbar/Navbar";
import { Carrito } from "./components/checkout/Carrito";
import { CartProvider } from "./components/context/cartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBarPsi />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer />}/>
            <Route path="/carrito" element={<Carrito />} />
           

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;
