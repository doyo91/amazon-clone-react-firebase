import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../context/reducer";

const SubtotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  padding: 20px;
  background: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  .subtotal__gift {
    display: flex;
    align-items: center;

    & > input {
      margin-right: 5px;
    }
  }

  .subtotal__btn {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;

export const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <SubtotalStyled className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Este pedido contiene regalos
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />
      <button className="subtotal__btn">Tramitar pedido</button>
    </SubtotalStyled>
  );
};
