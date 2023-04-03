import React from "react";

interface ProductProps {
  product?: any;
}

const ProductCard = (props: ProductProps) => {
  return (
    <div className="card m-2">
      <div>
        <img
          src={props.product.thumbnail}
          height={150}
          width={180}
          alt={props.product.title}
          className=""
        ></img>
      </div>
    </div>
  );
};

export default ProductCard;
