import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.imagen} />
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: u$d {producto.precio}</p>

        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
