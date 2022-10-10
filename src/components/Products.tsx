import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <SWrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </SWrapper>
  );
};

export default Products;

const SWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 10px;
  grid-auto-rows: minmax(240px, auto);
`;
