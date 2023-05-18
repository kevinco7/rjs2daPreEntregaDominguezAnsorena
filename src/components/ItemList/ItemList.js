import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="productos">
        {products.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
