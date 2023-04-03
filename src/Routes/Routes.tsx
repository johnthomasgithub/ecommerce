import React from "react";
import { BrowserRouter, Routes as Routers, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path="*" element={<Home />}/>
      </Routers>
    </BrowserRouter>
  );
};

export default Routes;
