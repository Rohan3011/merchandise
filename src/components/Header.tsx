import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SContainer } from "./shared";
import { CartIcon, MenuIcon } from "../assets/Icons";
import DropdownMenu from "./DropdownMenu";
import Overlay from "./Overlay";
import DropdownCart from "./DropdownCart";

type HeaderItemType = {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
};

export default function Header() {
  return (
    <SWrapper>
      <SHeader>
        <HeaderItem icon={<MenuIcon className="header-icon" />} label={"Menu"}>
          <DropdownMenu />
        </HeaderItem>
        <HeaderItem
          icon={<CartIcon className="header-icon" />}
          label={"Shopping Cart"}
        >
          <DropdownCart />
        </HeaderItem>
      </SHeader>
      <SSubHeader>
        <STitle>Additionals</STitle>
      </SSubHeader>
    </SWrapper>
  );
}

function HeaderItem({ icon, label, children }: HeaderItemType) {
  const menuRef = useRef<HTMLHeadingElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => setOpen(!open);

  useEffect(() => {
    if (open) {
      menuRef.current?.focus();
    }
  }, [open]);

  return (
    <div onClick={handleClose}>
      {icon}
      <div ref={menuRef} hidden={!open} tabIndex={1} onBlur={handleClose}>
        {children}
      </div>
    </div>
  );
}

const SWrapper = styled(SContainer)`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 8px;
`;

const SHeader = styled.header`
  height: 50px;
  width: 100%;
  background-color: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SSubHeader = styled.sub`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0;
  background-color: inherit;
  display: flex;
  background-color: inherit;
`;

const STitle = styled.h1`
  font-size: 400%;
  font-weight: 700;
`;
