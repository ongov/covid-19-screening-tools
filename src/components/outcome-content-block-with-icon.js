import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  max-width: 72rem;
  width: 100%;
`

const Icon = styled.div`
  position: relative;
  padding-left: calc(2rem / 2);
  padding-right: calc(2rem / 2);
  box-sizing: border-box;
  float: left;
`

const Heading = styled.h2`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 1rem 2rem 0 6rem;
`

const Content = styled.div`
  margin: 0.25rem 2rem 1rem 6rem;
`

export default ({ icon, heading, children }) => (
  <Container>
    <Icon>{icon}</Icon>
    <Heading>{heading}</Heading>
    {children && <Content>{children}</Content>}
  </Container>
)
