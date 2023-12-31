import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/Firebase/Firebase";
import logo from "../../assets/crown.svg";
import "./Navigation.scss";
import CardIcon from "../../components/CardIcon/CardIcon";
import CardDropDown from "../../components/CardDropDown/CardDropDown";
import { CartContext } from "../../contexts/card.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  function handleShop() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" className="logooo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CardIcon onClick={handleShop} />
        </div>

        {isCartOpen && <CardDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
