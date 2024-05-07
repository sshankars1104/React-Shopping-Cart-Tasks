//Section.jsx

import React from "react";
import "./Section.css";
import SectionData from "./SectionData";
import image from "../../Images/dummyimage.jpg";

function Section({ setCartCount, cart, setCart }) {
  const increment = () => {
    setCartCount((privious) => privious + 1);
  };
  const Decrement = () => {
    setCartCount((privious) => privious - 1);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  const cardData = [
    {
      id: 1,
      productName: "Fancy Product",
      price: { regular: "$40.00 - $80.00" },
      image: image,
      sale: false,
      star: false,
    },
    {
      id: 2,
      productName: "Special Item",
      price: { regular: "$20.00", discounted: "$18.00" },
      image: image,
      sale: true,
      star: true,
    },
    {
      id: 3,
      productName: "Sale Item",
      price: { regular: "$50.00", discounted: "$25.00" },
      image: image,
      sale: true,
      star: true,
    },
    {
      id: 4,
      productName: "Popular Item",
      price: { regular: "$40.00" },
      image: image,
      sale: false,
      star: false,
    },
    {
      id: 5,
      productName: "Sale Item",
      price: { regular: "$50.00", discounted: "$25.00" },
      image: image,
      sale: true,
      star: true,
    },
    {
      id: 6,
      productName: "Fancy Product",
      price: { regular: "$140.00 - $280.00" },
      image: image,
      sale: false,
      star: false,
    },
    {
      id: 7,
      productName: "Special Items",
      price: { regular: "$20.00", discounted: "$18.00" },
      image: image,
      sale: true,
      star: true,
    },
    {
      id: 8,
      productName: "Popular Items",
      price: { regular: "$40.00" },
      image: image,
      sale: false,
      star: false,
    },
  ];

  return (
    <div className="Section">
      {cardData.map((item, index) => (
        <div key={index} className="card-wrapper">
          <SectionData
            id={item.id}
            productName={item.productName}
            regularPrice={item.price.regular}
            discountedPrice={item.price.discounted}
            image={item.image}
            sale={item.sale}
            star={item.star}
            increment={increment}
            Decrement={Decrement}
            addToCart={() => addToCart(item)}
            removeFromCart={() => removeFromCart(item)}
          />
        </div>
      ))}
    </div>
  );
}

export default Section;
