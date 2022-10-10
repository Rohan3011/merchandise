import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <SNavbar>
      <SNavLinks>
        <SNavLink>All</SNavLink>
        <SNavLink>New in store</SNavLink>
        <SNavLink>Accessories</SNavLink>
        <SNavLink>Book and Stationary</SNavLink>
        <SNavLink>Printed art</SNavLink>
        <SNavLink>Clothing</SNavLink>
      </SNavLinks>
    </SNavbar>
  );
};

export default Navbar;

const SNavbar = styled.nav`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid gray;
`;

const SNavLinks = styled.ul`
  display: none;
  width: 100%;
  margin: 0px;
  list-style: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

const SNavLink = styled.li`
  cursor: pointer;
  display: inline-block;
  position: relative;
  color: black;

  &:active {
    transform: scale(0.95);
    transition-duration: 200ms;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
