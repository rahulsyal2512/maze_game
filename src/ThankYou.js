import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  font-size: 29px;
  color: green;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const ThankYou = () => {
  return (
    <Container>
      Hurray! I have found my mother. Thank you for helping me.
    </Container>
  );
};

export default ThankYou;
