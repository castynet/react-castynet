import React, { Component } from "react";
import styled from "styled-components";
import CastynetAnimated from "./castynetAnimation";

export default class Intro extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Title>
            <CastynetAnimated />
          </Title>
          <Description>Empowering Software</Description>
          <Text>
            we create <span className="marked">elegant software products</span>{" "}
            for the <span className="marked">web.</span>
          </Text>
        </Wrapper>
      </>
    );
  }
}
const Text = styled.p`
  font-family: "Roboto Mono", monospace;
  padding: 0 20px;
  line-height: 1.5em;
  font-size: 1.1em;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 100px auto 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  padding: 0 10px 10px;
  max-width: 100%;
`;

const Description = styled.h2`
  font-size: 2.5em;
  letter-spacing: 1px;
  color: #304d5b;
  font-weight: 400;
  font-family: "Teko", sans-serif;
  padding-bottom: 10px;
`;
