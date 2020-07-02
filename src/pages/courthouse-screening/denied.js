import React, { useContext } from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"
import styled from "styled-components"

import { GlobalStateContext } from "../../context/global-context-provider"

import OutcomeTemplate from "../../templates/outcome-template"
import Header from "../../components/outcome-header"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import ContactCard from "../../components/outcome-contact-card"
import Footer from "../../components/outcome-footer"

import CancelLarge from "../../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import Warning from "../../images/inline-svgs/ontario-icon-warning.inline.svg"
import SpeechBubble from "../../images/inline-svgs/ontario-icon-speech-bubble.inline.svg"
import CancelSmall from "../../images/inline-svgs/ontario-icon-cancel-small.inline.svg"

const lang = "en"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: inline-block;
  margin: 2rem calc(50% - (120px / 2));
  background-color: ${Red};
`

const Denied = () => {
  const { courthouse } = useContext(GlobalStateContext)

  return (
    <OutcomeTemplate lang={lang}>
      <Header
        title={
          <>
            {courthouse && courthouse.court_name}
            <br />
            COVID-19 screening result
          </>
        }
        heading={"You cannot enter"}
        icon={<HeadingDeniedIcon />}
        color={Red}
        titleColor={"#FFE0E2"}
      />
      <ContentBlock lang={lang} icon={<Warning />} heading={`You cannot enter ${courthouse && courthouse.court_name}`}>
        on {format(new Date(), "MMMM d, yyyy", { locale: en })}
      </ContentBlock>
      <ContentBlock lang={lang} icon={<SpeechBubble />} heading={"Who to contact"}>
        <ContactCard
          lang={lang}
          dutyCounselNumber={courthouse && courthouse.duty_counsel_phone}
          courthouseNumber={courthouse && courthouse.phone}
        />
      </ContentBlock>
      <Footer icon={<CancelSmall />} color={Red} />
    </OutcomeTemplate>
  )
}

export default Denied
