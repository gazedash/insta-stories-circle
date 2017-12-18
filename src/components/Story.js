import React, { Component } from "react";
import styled from "styled-components";

const Round = styled.div`
  border-radius: 50%;
`;

const StoryInner = styled.img`
  height: 51px;
  width: 51px;
`.withComponent(Round.withComponent("img"));

const WrapperGradient = styled.div`
  background: linear-gradient(to bottom, #d82b7e, #f57939);
  height: 56px;
  width: 56px;
  padding: 2px;
`.withComponent(Round);

const WrapperWhite = styled.div`
  height: 52px;
  width: 52px;
  padding: 2px;
  background-color: white;
`.withComponent(Round);

const Story = props => (
  <WrapperGradient>
    <WrapperWhite>
      <StoryInner {...props} />
    </WrapperWhite>
  </WrapperGradient>
);

export default Story;
