import React, { useState } from "react";
import styled from "styled-components";

// Watch the Button tutorial
// http://react.school/ui/button

// Free React training
// http://react.school/join

// Free Material-UI template
// http://react.school/material-ui/templates

const theme = {
  red: {
    default: "#3f5160",
    hover: "#E53935"
  },
  orange: {
    default: "#3f5160",
    hover: "#FBC02D"
  },
  dark: {
    default: "#3f5160",
    hover: "#1C2833"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  //text-transform: uppercase;
  margin: 10px 50px;
  height: 100px;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 450ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "dark"
};

export default function App() {
  return (
    <>
    <head>The is the Header for my react page.</head>
      <body
        style={{
          height: "800px",
          background: "#81D4FA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h2 style={{ textJustify: "center" }}></h2>
        <a
          href="https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorials-github.html"
          target="_blank"
        >
          <Button theme="orange">
            {" "}
            AWS: How to Deploy Repositories directly to an EC2{" "}
          </Button>
        </a>

        <a
          href="https://docs.github.com/en/actions/deployment/deploying-to-your-cloud-provider/deploying-to-amazon-elastic-container-service"
          target="_blank"
        >
          <Button theme="dark">
            {" "}
            GitHub: How to Deploy Repositories directly to an EC2{" "}
          </Button>
        </a>

        <a href="https://www.youtube.com/watch?v=HVw_NZUhDKs" target="_blank">
          <Button theme="red">
            {" "}
            Youtube: Deploying a React app with GitHub Actions
          </Button>
        </a>
      </body>
    </>
  );
}
