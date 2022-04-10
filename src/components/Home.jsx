// Author: @devangs

import React from "react";

import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-Back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order  Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Solar for New Roof "
        description="Solar Roof Costs Less Than a New Roof Solar panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order  Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnTxt="Shop now"
      />
    </Container>
  );
}

export default Home;

//Container
const Container = styled.div`
  height: 100vh;
`;
