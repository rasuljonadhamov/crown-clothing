import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/Firebase/Firebase";
import logo from "../../assets/crown.svg";
import "./Navigation.scss";
import CardIcon from "../../components/CardIcon/CardIcon";
import CardDropDown from "../../components/CardDropDown/CardDropDown";
import { CardContext } from "../../contexts/card.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCardOpen, setIsCardOpen } = useContext(CardContext);

  function handleShop() {
    setIsCardOpen(!isCardOpen);
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

        {isCardOpen && <CardDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
