import React from "react";
import styled from "styled-components";

function DropdownMenu() {
  return (
    <SDropdownContainer>
      <SDropdownItem>All</SDropdownItem>
      <SDropdownItem>New in store</SDropdownItem>
      <SDropdownItem>Accessories</SDropdownItem>
      <SDropdownItem>Book and Stationary</SDropdownItem>
      <SDropdownItem>Printed art</SDropdownItem>
      <SDropdownItem>Clothing</SDropdownItem>
    </SDropdownContainer>
  );
}
export default DropdownMenu;

const SDropdownContainer = styled.div`
  z-index: 20;
  position: absolute;
  top: 58px;
  min-height: 280px;
  width: 280px;
  background-color: #1f1a1a;
  border-radius: 8px;
  padding: 1rem;
  backdrop-filter: opacity(20%);
`;

const SDropdownItem = styled.div`
  height: 40px;
  display: flex;
  padding: 0.5rem;
  color: white;
  border-radius: 8px;

  &:hover {
    background-color: #322a2a;
  }
`;
