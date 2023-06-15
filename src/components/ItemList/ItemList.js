import Item from "../Item/Item";

const ItemList = ({ products, titulo }) => {
  return (
    <div className="container">
      <h2 className="">{titulo}</h2>
      <div className="productos">
        {products.map((prod) => (<Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
