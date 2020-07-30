import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/StateProvider";

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-end;
  max-height: 400px;
  min-width: 100px;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  z-index: 1;
  background: white;

  .product__info {
    height: 100px;
    margin-bottom: 15px;
  }

  .product__price {
    margin-top: 5px;
  }

  .product__rating {
    display: flex;
  }

  .product__image {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  .product__btn {
    background: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    align-self: center;
  }
`;


export const Product = ({ id, title, image, price, rating }) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
  return (
    <ProductStyled className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span role="img" key={index} >⭐</span>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title + "imagen"} />
      <button className="product__btn" onClick={addToBasket}>Añadir a la cesta</button>
    </ProductStyled>
  );
};
