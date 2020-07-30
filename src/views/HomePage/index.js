import React from "react";
import styled from "styled-components";
import { Product } from "../../components/Product";

const HomePageStyled = styled.div`
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  .home__image {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -1;
    margin-bottom: -150px;
  }

  .home__row {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const HomePage = () => {
  return (
    <HomePageStyled className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_HO_XSite_HeroTALL_1500x600._CB409718982_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="599364031"
          title="Aprender PHP, MySQL y JavaScript (Español) Tapa blanda – 5 septiembre 2019  "
          price={43.51}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51N1b+xhRXL._SX352_BO1,204,203,200_.jpg"
        />
        <Product
          id="599391031"
          title="Cecotec Conga Serie 1090 1400 Pa, Tecnología iTech Space, Aspira, Barre, Friega y Pasa la Mopa, 5 Modos, 160 min Autonomía, Programable y con Cepillo Mascotas, Negro  "
          price={139.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61zT0NpeeOL._AC_SL1000_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="B07TH9VXMF"
          title="Xiaomi Smart Band 4, Adultos Unisex, Negro, Talla única "
          price={25.35}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/513Rcrg9E0L._AC_SL1000_.jpg"
        />
        <Product
          id="C3B9NDKV4QG4FHYFT4VJ"
          title="Echo Plus (2.ª generación) - Sonido de alta calidad y controlador de Hogar digital integrado, tela de color antracita "
          price={69.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71WvxHqKqeL._AC_SL1000_.jpg"
        />
        <Product
          id="1596029145"
          title="Apple AirPods con estuche de carga con cable (2ª generación)  "
          price={134.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1596029195"
          title="LG 29UM69G-B - Monitor Gaming UltraWide WFHD de 73.7 cm "
          price={237.00}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51tKrQihqiL._AC_.jpg"
        />
      </div>
    </HomePageStyled>
  );
};
