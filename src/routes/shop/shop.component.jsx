import "./shop.scss";
import SHOP_DATA from "../../constants/shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ name, price, id, imageUrl }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>{price}</p>
          <img src={imageUrl} alt={name} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
