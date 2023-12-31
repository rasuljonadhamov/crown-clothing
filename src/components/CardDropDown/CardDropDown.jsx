import { useContext } from "react";
import "./CardDropDown.scss";
import { CartContext } from "../../contexts/card.context";
import CartItem from "../CardItem/CardItem";
import Button from "../buttons/Button";

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="card-dropdown-container">
      <div className="card-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CardDropDown;
