import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../context/StateProvider";

const HeaderStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  .header__logo {
    width: 100px;
    margin: 0 20px;
    margin-top: 18px;
    object-fit: contain;
  }

  .header__search {
    display: flex;
    flex: 1;
  }

  .header__searchInput {
    height: 12px;
    padding: 11px;
    border: none;
    width: 100%;
  }

  .header__searchIcon {
    padding: 5px;
    height: 22px !important;
    background: #cd9042;
  }

  .header__nav {
    display: flex;
    justify-content: space-evenly;
  }

  .header__link {
    text-decoration: none;
    color: white;
  }

  .header__option {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
  }

  .header__optionLineOne {
    font-size: 10px;
  }

  .header__optionLineTwo {
    font-size: 13px;
    font-weight: bold;
  }

  .header__optionBasket {
    display: flex;
    align-items: center;
  }

  .header__basketCount {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Header = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <HeaderStyled className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo amazon clone"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user ? "/login" : "#"} className="header__link">
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">Hola, {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Cerrar Sesión" : "Ingresar"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Devoluciones</span>
            <span className="header__optionLineTwo">y Pedidos</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Tú</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLinteTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </HeaderStyled>
  );
};
