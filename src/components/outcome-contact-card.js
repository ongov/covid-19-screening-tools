import React from "react"
import styled from "styled-components"

import { outcomeContactCard as content } from "../localized_content"

const Container = styled.div`
  p,
  ul {
    margin: 0.5rem 0;
  }

  a {
    white-space: nowrap;
  }
`

const ContentBlock = styled.div`
  margin: 1.5 rem 0;
`

const ContactCard = ({ lang, dutyCounselNumber, courthouseNumber }) => (
  <Container>
    <ContentBlock>
      <p>
        <strong>{content[lang].employees}</strong>
      </p>
      <p>{content[lang].employeesContact}</p>
    </ContentBlock>
    <ContentBlock>
      <p>
        <strong>{content[lang].plaintiffsOrDefendants}</strong>
      </p>
      <p>{content[lang].plaintiffsOrDefendantsContactHeading}:</p>
      <ul>
        <li>{content[lang].plaintiffsOrDefendantsContactList.lawyer}</li>
        <li>
          {content[lang].plaintiffsOrDefendantsContactList.dutyCounsel}&nbsp;
          <a href={`tel:${dutyCounselNumber}`}>{dutyCounselNumber}</a>
        </li>
      </ul>
    </ContentBlock>
    <ContentBlock>
      <p>
        <strong>{content[lang].witnesses}</strong>
      </p>
      <p>{content[lang].witnessesContact}</p>
    </ContentBlock>
    <ContentBlock>
      <p>
        <strong>{content[lang].others}</strong>
      </p>
      <p>
        {content[lang].othersContact}&nbsp;<a href={`tel:${courthouseNumber}`}>{courthouseNumber}</a>
      </p>
    </ContentBlock>
  </Container>
)

export default ContactCard
