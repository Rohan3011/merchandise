import styled from "styled-components";

export default function Overlay({ onClose, blur }: any) {
  function handleClose() {}

  return <SOverlay onClick={handleClose} />;
}

const SOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 10;
  backdrop-filter: blur(2px);
`;
