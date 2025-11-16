import React from "react";
import { WhyChoose } from "./WhyChoose";
import Hero from "./Hero";
import Products from "../Shop/Products";
import { Expriences } from "./Expriences";
import Materials from "./Materials";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products headline="Best Selling Products" />
      <Expriences />
      <Materials />
    </>
  );
};

export default Home;
