import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/StateProvider";
import { CheckoutProduct } from "../../components/CheckoutProduct";
import { Subtotal } from "../../components/Subtotal";

const CheckoutPageStyled = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
  .checkout__ad {
    width: 100%;
    margin-bottom: 10px;
  }

  .checkout__title {
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
  }
`;

export const CheckoutPage = () => {
  const [{ basket }] = useStateValue();

  return (
    <CheckoutPageStyled className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Tú cesta de la compra está vacia</h2>
            <p>
              No tienes productos en tu cesta. Compra uno o más productos,
              pinchando en "Añadir a la cesta".
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Tú cesta de la compra</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </CheckoutPageStyled>
  );
};
