import React from "react"
import styled from "styled-components"

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

const Denied = () => (
  <OutcomeTemplate lang={lang}>
    <Header
      title={
        <>
          Windsor Courthouse
          <br />
          COVID-19 screening result
        </>
      }
      heading={"Denied"}
      icon={<HeadingDeniedIcon />}
      color={Red}
      titleColor={"#FFE0E2"}
    />
    <ContentBlock lang={lang} icon={<Warning />} heading={"You cannot enter Windsor Courthouse"}>
      on July 6, 2020
    </ContentBlock>
    <ContentBlock lang={lang} icon={<SpeechBubble />} heading={"Who to contact"}>
      <ContactCard lang={lang} dutyCounselNumber={"(416) 555 5555"} courthouseNumber={"(416) 777 7777"} />
    </ContentBlock>
    <Footer icon={<CancelSmall />} color={Red} />
  </OutcomeTemplate>
)

export default Denied
