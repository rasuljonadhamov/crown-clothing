import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";

const CardIcon = () => {
  return (
    <div className="card-icon-container">
      <div className="shopping-icon">
        <img src={ShoppingIcon} alt="aa" className="img"/>
        <span className="item-count">0</span>
      </div>
    </div>
  );
};

export default CardIcon;