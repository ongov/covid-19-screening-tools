import React from "react"
import styled from "styled-components"

import OutcomeTemplate from "../../templates/outcome-template"
import Header from "../../components/outcome-header"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import Footer from "../../components/outcome-footer"

import LargeCheckmark from "../../images/inline-svgs/ontario-icon-checkmark-large.inline.svg"
import SmallCheckmark from "../../images/inline-svgs/ontario-icon-checkmark-small.inline.svg"
import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import MapPin from "../../images/inline-svgs/ontario-icon-map-pin.inline.svg"
import Information from "../../images/inline-svgs/ontario-icon-information.inline.svg"
import StaySafe from "../../images/inline-svgs/ontario-icon-stay-safe.inline.svg"

const lang = "en"

const Green = "#118847"

const HeadingCheckmark = styled(LargeCheckmark)`
  display: inline-block;
  margin: 2rem calc(50% - (143px / 2));
  background-color: ${Green};
`

const Approved = () => (
  <OutcomeTemplate lang={lang}>
    <Header
      title={
        <>
          Windsor Courthouse
          <br />
          COVID-19 screening result
        </>
      }
      heading={"Approved"}
      icon={<HeadingCheckmark />}
      color={Green}
      titleColor={"#d1efd4"}
    />
    <ContentBlock lang={lang} icon={<Calendar />} heading={"July 6th, 2020"}>
      valid from 9:50 a.m. to 11:59 p.m
    </ContentBlock>
    <ContentBlock lang={lang} icon={<MapPin />} heading={"You can enter"}>
      Windsor Courthouse
      <br />
      245 Windsor Ave
      <br />
      Windsor Ontario
      <br />
      N9A 1J2
    </ContentBlock>
    <ContentBlock lang={lang} icon={<Information />} heading={"Next steps"}>
      <>
        <p>Show this result to courthouse security either on your phone or download a PDF to print out.</p>
        <p>Retake this screening every day before you enter a courthouse.</p>
      </>
    </ContentBlock>
    <ContentBlock lang={lang} icon={<StaySafe />} heading={"Stay safe"}>
      Download the Covid Alert app to get anonymous notifications if someone you were around tests positive for
      COVID-19.
    </ContentBlock>
    <Footer icon={<SmallCheckmark />} color={Green} />
  </OutcomeTemplate>
)

export default Approved
