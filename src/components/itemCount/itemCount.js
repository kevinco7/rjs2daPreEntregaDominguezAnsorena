import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const increment = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="counter">
      <div>
        <button className="button ver-mas" onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <h4 className="number">{cantidad}</h4>
        <button className="button ver-mas" onClick={increment}>
          {" "}
          +{" "}
        </button>
      </div>
      <div className="">
        <button
          className="button2  "
          onClick={() => onAdd(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
