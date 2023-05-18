import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../asyncMock";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("Productos");
  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);

  return (
    <div>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;
