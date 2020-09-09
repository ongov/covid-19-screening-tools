import React from "react"
import styled from "styled-components"

import OntarioLogoImg from "../images/ontario@2x-print.png"

const Container = styled.div`
  position: relative;
  border-bottom: 8px solid ${props => props.color};
  width: 100%;
`

const InnerContainer = styled.div`
  clear: both;
  position: relative;
  margin: 2.5rem auto 2rem auto;
  max-width: 72rem;
  width: 100%;
`

const Icon = styled.div`
  display: inline-block;
  position: relative;
  left: 1.2rem;
  background-color: #fff;
`

const OntarioLogoWidth = "7rem"
const OntarioLogo = styled.img`
  width: ${OntarioLogoWidth};
  position: relative;
  display: inline-block;
  float: right;
  padding-right: 1.2rem;
  @media screen and (max-width: 39.9375em) {
    float: none;
    left: 35%;
  }
`

export default ({ icon, color }) => (
  <Container color={color}>
    <InnerContainer>
      <Icon>{icon}</Icon>
      <OntarioLogo src={OntarioLogoImg} alt="Ontario Logo" />
    </InnerContainer>
  </Container>
)
