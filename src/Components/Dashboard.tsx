import React from "react";
import { ProductList } from "../Data/ProductList";
import ProductCard from "./ProductCard";

const Dashboard = () => {
  return (
    <div>
      {ProductList.map((ele: any, index: any) => {
        return <ProductCard key={index} product={ele} />;
      })}
    </div>
  );
};

export default Dashboard;
