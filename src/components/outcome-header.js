import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  width: 100%;
  margin-top: -2rem;
  background-color: ${props => props.color};

  @media screen and (max-width: 39.9375em) {
    margin-top: -1rem;
  }
`

const Title = styled.p`
  margin: 0;
  padding: 1.5rem;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.48px;
  color: ${props => props.color};
`

const Heading = styled.h1`
  margin: 0;
  padding: 1.5rem 0;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.14px;
  color: #fff;
`

export default function({ title, heading, icon, color, titleColor }) {
  return (
    <Container color={color}>
      <Title color={titleColor}>{title}</Title>
      <Heading>{heading}</Heading>
      {icon}
    </Container>
  )
}
