import { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";
import { CartContext } from "../../contexts/card.context";

const CardIcon = ({ onClick }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <div className="card-icon-container">
      <div className="shopping-icon" onClick={onClick}>
        <img src={ShoppingIcon} alt="aa" className="img" />
        <span className="item-count">{cartItemCount}</span>
      </div>
    </div>
  );
};

export default CardIcon;
