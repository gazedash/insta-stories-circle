import React, { Component } from "react";
import styled from "styled-components";

// probably I could do something like this
// 1. Unneeded component
// 2. Proxy props
// 3. Redundant DOM nodes
const ImageStyled = (props) => (
    <div>
        <div></div>
        <img {...props} />
    </div>
  );

//   <ImageStyled onClick={() => console.log('hel')} src={"https://loremflickr.com/150/150?random=1"}/>

const Story = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  height: 56px;
  width: 56px;
  border: 2px solid white;

  :after {
    content: "\00a0";

    background: linear-gradient(to bottom, #d82b7e, #f57939);
    border-radius: 50%;
    position: sticky;
    display: block;
    width: 60px;
    height: 60px;
    z-index: -2;
    margin-top: -4px;
    margin-left: -4px;
  }
`;

export default Story;
