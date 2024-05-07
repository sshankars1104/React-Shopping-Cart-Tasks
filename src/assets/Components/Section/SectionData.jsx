import React, { useState } from "react";
import "./Section.css";

function SectionData(props) {
  const [buttonText, setButtonText] = useState(
    props.sale ? "Add to Cart" : "View Options"
  );

  const handleClick = () => {
    if (props.sale) {
      if (buttonText === "Add to Cart") {
        props.addToCart();
        props.increment();
        setButtonText("Remove from Cart");
      } else {
        props.removeFromCart();
        props.Decrement();
        setButtonText("Add to Cart");
      }
    } else {
    }
  };

  return (
    <div className="card">
      {props.sale && (
        <div className="sales">
          <h5>Sale</h5>
        </div>
      )}
      <img src={props.image} alt="Image" />
      <div className="card-body">
        <h1>{props.productName}</h1>
        <div className={props.sale ? "starRating" : "ZerostarRating"}>
          {props.star ? " " : " "}
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </div>
        <h3>
          {props.regularPrice}
          {props.discountedPrice && (
            <span className="discounted-price strikeout">
              {props.discountedPrice}
            </span>
          )}
        </h3>
        <button
          onClick={handleClick}
          className={props.sale ? "add-to-cart-btn" : "view-btn"}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default SectionData;
