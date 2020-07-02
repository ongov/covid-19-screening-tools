import React from "react"
import styled from "styled-components"

import OntarioLogoImg from "../images/ontario@2x-print.png"

const Container = styled.div`
  position: relative;
  border-bottom: 8px solid ${props => props.color};
  width: 100%;
`

const InnerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 72rem;
  width: 100%;
`

const Icon = styled.div`
  display: inline-block;
  position: absolute;
  left: 1.5rem;
  bottom: 2rem;
  background-color: #fff;
`

const OntarioLogoWidth = "7rem"
const OntarioLogo = styled.img`
  width: ${OntarioLogoWidth};
  margin: 2rem calc(50% - (${OntarioLogoWidth} / 2));
`

export default function({ icon, color }) {
  return (
    <Container color={color}>
      <InnerContainer>
        <Icon>{icon}</Icon>
        <OntarioLogo src={OntarioLogoImg} alt="Ontario Logo" />
      </InnerContainer>
    </Container>
  )
}
