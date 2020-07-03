import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: block;
  width: 100%;
  margin: -2rem 0 2rem 0;
  background-color: ${props => props.color};
  @media screen and (max-width: 39.9375em) {
    margin-top: -1rem;
  }
`

const Title = styled.p`
  padding: 1rem 1rem 2rem 1rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.48px;
  color: white;
  @media screen and (max-width: 39.9375em) {
    padding-bottom: 1rem;
  }
`

const Heading = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.875rem;
  text-align: center;
  letter-spacing: 0.15rem;
  margin-bottom: 0;
  padding: 0 1rem;
  color: #fff;
  @media screen and (max-width: 39.9375em) {
    font-size: 40px;
  }
`

const Icon = styled.div`
  margin: auto;
  padding: 0.5rem 0 0.5rem 0;
  width: 100%;
  @media screen and (max-width: 39.9375em) {
    svg {
      display: block;
      margin: 1rem auto 0 auto;
      width: 80px;
    }
  }
`



export default function({ title, heading, icon, color, titleColor }) {
  return (
    <Container color={color}>
      <Title color={titleColor}>{title}</Title>
      <Heading>{heading}</Heading>
      <Icon>{icon}</Icon>
    </Container>
  )
}
