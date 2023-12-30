import { useContext } from "react";
import CardItem from "../CardItem/CardItem";
import Button from "../buttons/Button";
import "./CardDropDown.scss";
import { CardContext } from "../../contexts/card.context";

const CardDropDown = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <div className="card-dropdown-container">
      <div className="card-items">
        {cardItems &&
          cardItems.map((cardItem) => (
            <CardItem key={cardItem.id} cardItem={cardItem} />
          ))}
      </div>
      <Button>Go To CheckOut</Button>
    </div>
  );
};

export default CardDropDown;
