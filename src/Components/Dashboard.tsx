import React from "react";
import { ProductList } from "../Data/ProductList";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {ProductList.map((ele: any, index: any) => {
        return <ProductCard key={index} product={ele} />;
      })}
    </div>
  );
};

export default Dashboard;
