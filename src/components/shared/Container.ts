import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 14px;
  transition: all 5ms linear;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1280px) {
    padding: 0 80px;
  }
`;
