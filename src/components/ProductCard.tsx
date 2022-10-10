import styled from "styled-components";
import productImg from "../assets/react.svg";

const ProductCard = () => {
  return (
    <SContainer>
      <SProductImage src={productImg} alt="product_img" />
      <SProductFooter>
        <p>some cheap ass product</p>
        <p>$5555</p>
      </SProductFooter>
    </SContainer>
  );
};

export default ProductCard;

const SContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #ececec;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
`;

const SProductImage = styled.img`
  box-sizing: border-box;
  flex-grow: 1;
`;

const SProductFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
