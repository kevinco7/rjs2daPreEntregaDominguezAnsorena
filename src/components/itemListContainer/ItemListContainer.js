import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import { pedirDatos } from "../../asyncMock";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo] = useState("Productos");


  useEffect(() => {
      
    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
    
    getDocs(q)
      .then((resp) => {
        setProductos( resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        }))
      
      })

    
  }, [categoria])

  return (
    <div>
      <ItemList products={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
