import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProductStyled = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  
  .checkoutProduct__image {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }

  .checkoutProduct__info {
    padding-left: 20px;
  }

  .checkoutProduct__title {
    font-size: 17px;
    font-weight: 800;
  }

  .checkoutProduct__price {
  }

  .checkoutProduct__rating {
    display: flex;
  }

  .checkoutProduct__btn {
    background: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    margin-top: 10px;
    color: #111;
    padding: 0 0.5em;
  }
`;

export const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   Remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <CheckoutProductStyled className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt={title + "imagen"}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span role="img" key={index}>⭐</span>
            ))}
        </div>
        <button className="checkoutProduct__btn" onClick={removeFromBasket}>
          Quitar de la cesta
        </button>
      </div>
    </CheckoutProductStyled>
  );
};
