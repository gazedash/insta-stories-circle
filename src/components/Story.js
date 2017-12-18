import React, { Component } from "react";
import styled from "styled-components";

const Story = styled.div`
  border-radius: 50%;
  height: 52px;
  width: 52px;
  border: 2px solid white;
  margin: 2px;

  :after {
    content: "\00a0";
    background: linear-gradient(to bottom, #d82b7e, #f57939);
    border-radius: 50%;
    position: sticky;
    display: block;
    width: 60px;
    height: 60px;
    margin-top: -4px;
    margin-left: -4px;
    z-index: -2;
  }
`;

export default Story;
