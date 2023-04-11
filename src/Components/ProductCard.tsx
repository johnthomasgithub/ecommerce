import React from "react";

interface ProductProps {
  product?: any;
}

const ProductCard = (props: ProductProps) => {
  return (
    <div className="card m-2" style={{ width: "300px" }}>
      <div>
        <img
          src={props.product.thumbnail}
          height={150}
          width={180}
          alt={props.product.title}
          className="border-rad mt-2"
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <h6 className="mt-2">Price : {props.product.price}</h6>
        <h6 className="mt-2">Discount : {props.product.discountPercentage}</h6>
        <h6 className="mt-2">Rating : {props.product.rating}</h6>
        {props.product.stock > 0 ? (
          <button className="btn btn-success">Available</button>
        ) : (
          <button className="btn btn-outline-danger">Out of stock</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
