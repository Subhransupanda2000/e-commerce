import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigation = useNavigate();
  function cartFun(event) {
    event.preventDefault();
    navigation("/cart");
  }
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={props.src} className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">${props.price}</p>
        <a className="btn btn-primary" onClick={cartFun}>
          Add to cart
        </a>
        <a className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default Card;
