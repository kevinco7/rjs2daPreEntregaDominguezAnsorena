import cart from "./../../assets/shopping-cart.png";
import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <div>
      <Link to="/">
        <img src={cart} alt="cart-widget" />
      </Link>
    </div>
  );
};
export default CartWidget;
