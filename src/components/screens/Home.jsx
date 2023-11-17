import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <CoverButton>
        <Button to="/create">Create Form</Button>
        {/* <Button to="/view">View Form</Button> */}
      </CoverButton>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoverButton = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled(Link)`
  background: #2382d4;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  margin: 0 auto;
`;
