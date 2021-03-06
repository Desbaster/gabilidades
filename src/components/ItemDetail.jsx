import React from "react";
import AddToCart from "./AddToCart";

const ItemDetail = (props) => {
  return (
    <div className="row itemDetail mt-5 mb-5">
      <div id="image" className="col-lg-7 col-md-7">
        <img alt={props.product.item.name} src={props.product.item.image}></img>
      </div>
      <div className="col-lg-5 col-md-5 leftBorder">
        <h3 className="font-weight-bold">{props.product.item.name}</h3>
        <h6 className="p-3">{props.product.item.description}</h6>
        <h4 className="pl-3 pr-3 ">${props.product.item.price}</h4>
        <AddToCart product={props.product}></AddToCart>
      </div>
    </div>
  );
};

export default ItemDetail;
