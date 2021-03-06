import React, { Component } from "react";
import styled from "styled-components";
import Story from "./Story";

const StoryListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-auto-columns: 50px;
  grid-auto-flow: column dense;
  overflow: auto;
`;
const StoryList = ({ items = [], onClick = a => {} }) => (
  <StoryListWrapper>
    {items.map((item, i) => (
      <Story
        style={{ backgroundImage: `url(${item.url}` }}
        key={item.id}
        onClick={() => onClick(i)}
      />
    ))}
  </StoryListWrapper>
);

export default StoryList;
