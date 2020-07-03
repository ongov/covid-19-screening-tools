import React from "react"
import styled from "styled-components"

import OutcomeTemplate from "../../templates/outcome-template"
import Header from "../../components/outcome-header"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import Footer from "../../components/outcome-footer"
import Button from "../../components/button"

import Expired from "../../images/inline-svgs/ontario-icon-expired.inline.svg"
import ExpiredSmall from "../../images/inline-svgs/ontario-icon-expired-small.inline.svg"
import Calendar from "../../images/inline-svgs/ontario-icon-calendar-grey.inline.svg"
import Information from "../../images/inline-svgs/ontario-icon-information-grey.inline.svg"

const lang = "en"

const Grey = "#666666"

const HeadingExpired = styled(Expired)`
  display: inline-block;
  margin: 2rem calc(50% - (143px / 2));
  background-color: ${Grey};
`

const RetakeButtonWrapper = styled.div`
  margin: 3rem 0 0.25rem 0;
  display: block;
  text-align: center;
`

const RetakeButton = styled(Button)`
  @media screen and (max-width: 40em) {
    margin: 0 1.5rem;
    max-width: calc(100% - 3rem);
  }
`

const Approved = () => (
  <OutcomeTemplate lang={lang}>
    <Header
      title={
        <>
          Windsor Courthouse COVID-19 screening result
        </>
      }
      heading={"Expired"}
      icon={<HeadingExpired />}
      color={Grey}
      titleColor={"#F2F2F2"}
    />
    <ContentBlock lang={lang} icon={<Calendar />} heading={"You can no longer enter Windsor Courthouse"} />
    <ContentBlock lang={lang} icon={<Information />} heading={"Next steps"}>
      Retake this screening at the start of every day before you enter a courthouse.
    </ContentBlock>
    <RetakeButtonWrapper><RetakeButton text="Start courthouse assessment" clickHandler={() => console.log("clicked!")} /></RetakeButtonWrapper>
    <Footer icon={<ExpiredSmall />} color={Grey} />
  </OutcomeTemplate>
)

export default Approved
