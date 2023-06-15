import { useContext } from "react";
import cart from "./../../assets/shopping-cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
const CartWidget = () => {

const {cantidadEnCarrito}= useContext(CartContext);

  return (
    <div>
      <Link to="/carrito">
        <img src={cart} alt="cart-widget" />
        
        <span className="numerito"> {cantidadEnCarrito()} </span>
      </Link>
    </div>
  );
   
};
export default CartWidget;
