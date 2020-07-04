import React from "react"
import styled from "styled-components"

import PhoneNumber from "./phone-number"
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

const DeniedContactCard = ({ lang, courthouse }) => {
  const dutyCounselNum = <PhoneNumber courthouse={courthouse} fieldName={"duty_counsel_phone"} lang={lang} />
  const courthouseNum = <PhoneNumber courthouse={courthouse} fieldName={"phone"} lang={lang} />
  const crownNum = <PhoneNumber courthouse={courthouse} fieldName={"crowns_office_phone"} lang={lang} />

  return (
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
          {courthouseNum && (
            <li>
              {content[lang].plaintiffsOrDefendantsContactList.courthouse}&nbsp;
              {courthouseNum}
            </li>
          )}
        </ul>

        <p>
          <strong>{content[lang].accusedPersons}</strong>
        </p>
        <p>{content[lang].accusedPersonsContactHeading}</p>
        <ul>
          <li>{content[lang].accusedPersonsContactList.lawyer}</li>
          {dutyCounselNum && (
            <li>
              {content[lang].accusedPersonsContactList.dutyCounsel}&nbsp;
              {dutyCounselNum}
            </li>
          )}
        </ul>
      </ContentBlock>
      <ContentBlock>
        <p>
          <strong>{content[lang].witnesses}</strong>
        </p>
        <p>{content[lang].witnessesContactHeading}</p>
        <ul>
          <li>{content[lang].witnessesContactList.officer}</li>
          {crownNum && (
            <li>
              {content[lang].witnessesContactList.crownsOffice}&nbsp;
              {crownNum}
            </li>
          )}
        </ul>
      </ContentBlock>
      <ContentBlock>
        <p>
          <strong>{content[lang].others}</strong>
        </p>
        {courthouseNum && (
          <p>
            {content[lang].othersContact}&nbsp;{courthouseNum}
          </p>
        )}
      </ContentBlock>
    </Container>
  )
}

export default DeniedContactCard
