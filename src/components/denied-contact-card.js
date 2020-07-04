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
  margin: 0.25rem 0 2rem 0;
  float: left;
  width: 22%;
  position: relative;
  padding-right: 1.875rem;
  @media screen and (max-width: 72.9375em) {
    float: none;
    margin-right: none;
    width: 100%;
  }
`

const DeniedContactCard = ({ lang, dutyCounselNumber, courthouseNumber }) => (
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

      <p>
      <strong>{content[lang].accusedPersons}</strong>
      </p>
      <p>{content[lang].accusedPersonsContactHeading}</p>
      <ul>
      <li>{content[lang].accusedPersonsContactList.lawyer}</li>
      <li>
      {content[lang].accusedPersonsContactList.dutyCounsel}&nbsp;
      </li>
      </ul>

    </ContentBlock>
    <ContentBlock>
      <p>
        <strong>{content[lang].witnesses}</strong>
      </p>
      <p>{content[lang].witnessesContactHeading}</p>
      <ul>
        <li>{content[lang].witnessesContactList.officer}</li>
        <li>
          {content[lang].witnessesContactList.crownsOffice}&nbsp;
        </li>
      </ul>
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

export default DeniedContactCard
