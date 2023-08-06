import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcements = () => {
  return <Container>Super Deal ! Free Shipping on Orders Over $50</Container>;
};

export default Announcements;
