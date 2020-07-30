import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../services/firebase";

const LoginPageStyled = styled.div`
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login__logo {
    width: 150px;
    object-fit: contain;
    margin: 20px auto;
  }

  .login__container {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid lightgray;

    & > h1 {
      font-weight: 500;
      margin-bottom: 20px;
    }

    & > form > h5 {
      margin-bottom: 5px;
    }

    & > form > input {
      height: 30px;
      margin-bottom: 10px;
      background: white;
      width: 98%;
    }

    & > p {
      margin-top: 15px;
      font-size: 12px;
    }
  }

  .login__signInBtn {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }

  .login__registerBtn {
    background: lightgray;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
  }
`;

export const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // do the login logic

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    // do the register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a user and logged in, redirect to homepage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <LoginPageStyled className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" className="login__signInBtn" onClick={login}>
            Ingresar
          </button>
        </form>
        <p>
          Al continuar, acepta los Términos de uso de Amazon. Consulte el Aviso
          de privacidad, el Aviso de cookies y el Aviso de anuncios basados ​​en
          intereses.
        </p>
        <button className="login__registerBtn" onClick={register}>
          Crea tú cuenta de Amazon
        </button>
      </div>
    </LoginPageStyled>
  );
};
