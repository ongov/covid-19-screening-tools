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
  @media print {
    background-color: white;
  }
`

const Title = styled.p`
  display: block;
  margin: 0 auto;
  padding: 1rem 3rem;
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.48px;
  color: white;
  width: 50%;
  @media screen and (max-width: 39.9375em) {
    padding: 1.5rem 3rem 1rem 3rem;
    width: 80%;
  }
  @media screen and (min-width: 40em) and (max-width: 72.9375em) {
    padding: 1rem 5rem 1rem 5rem;
    width: 70%;
  }
  @media print {
    color: black;
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
  @media print {
    color: black;
  }
`

const Icon = styled.div`
  margin: auto;
  padding: 0.5rem 0 1rem 0;
  width: 100%;
  @media screen and (max-width: 39.9375em) {
    padding: 0.5rem 0 3rem 0;
    svg {
      display: block;
      margin: 1rem auto 0 auto;
      width: 80px;
    }
  }
  @media print {
    display: none;
  }
`

export default ({ title, heading, icon, color, titleColor }) => (
  <Container color={color}>
    <Title color={titleColor}>{title}</Title>
    <Heading>{heading}</Heading>
    <Icon>{icon}</Icon>
  </Container>
)
