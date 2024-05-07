// Home.js
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";

function Home({ setCart, cart }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <div>
        <NavBar count={cartCount} />
        <Header />
        <Section
          setCartCount={setCartCount}
          setCart={setCart}
          cart={cart}
        />
        <Footer />
      </div>
    </>
  );
}

export default Home;
