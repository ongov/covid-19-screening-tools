import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: #def2fa;
  position: relative;
  margin: 2rem auto;
  max-width: 72rem;
  width: 100%;
  padding: 1.8rem 0 1rem 0;
`

const Icon = styled.div`
  position: relative;
  padding-left: calc(2rem / 2);
  padding-right: calc(2rem / 2);
  box-sizing: border-box;
  float: left;
`

const Heading = styled.div`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 0.2rem 2rem 0 6rem;
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
