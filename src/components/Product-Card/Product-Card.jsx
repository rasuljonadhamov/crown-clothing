import { useContext } from "react";
import Button from "../buttons/Button";
import "./Product-Card.scss";
import { CardContext } from "../../contexts/card.context";

const ProductCard = ({ product }) => {
  const { addItemToCard } = useContext(CardContext);
  const { name, imageUrl, price } = product;

  const addProduct = () => {
    addItemToCard(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProduct}>
        Add To Card
      </Button>
    </div>
  );
};

export default ProductCard;
