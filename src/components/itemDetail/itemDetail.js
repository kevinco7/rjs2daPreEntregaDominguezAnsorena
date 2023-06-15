
import { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ item }) => {
  // const [quantityAdded, setQuantityAdded] = useState(0);
  // const handleOnAdd = (quantity) => {
  //   setQuantityAdded(quantity);
  // };

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  
  

  const [cantidad, setCantidad] = useState(1);

  const increment = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
    
  };

  const decrement = () => { cantidad > 1 && setCantidad(cantidad - 1);
  };



  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount className="ver-mas"  cantidad={cantidad} increment={increment} decrement={decrement} addItem={()=>{agregarAlCarrito(item,cantidad) }}
            // stock={10}
            // onAdd={(cantidad) => console.log("Cantidad agregada", cantidad)}
          />
          
          {/* <div>
            {quantityAdded > 0 ? (
              <link to="/cart" className="Option">
                Terminar compra
              </link>
            ) : (
              <ItemCount
                item={item}
                initial={1}
                stock={item.stock}
                onAdd={handleOnAdd}
              />
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
