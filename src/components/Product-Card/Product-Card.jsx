import { useContext } from "react";
import Button from "../buttons/Button";
import "./Product-Card.scss";
import { CartContext } from "../../contexts/card.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addProductToCard = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add To Card
      </Button>
    </div>
  );
};

export default ProductCard;
