import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  margin: 2rem 0;
`

const Icon = styled.div`
  position: absolute;
  top: 0.25rem;
  left: 1.5rem;
`

const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.4;
  margin: 1rem 2rem 0 5.5rem;
`

const Content = styled.div`
  margin: 0.25rem 2rem 1rem 5.5rem;
`

export default function({ lang, icon, heading, children }) {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Heading>{heading}</Heading>
      <Content>{children}</Content>
    </Container>
  )
}
