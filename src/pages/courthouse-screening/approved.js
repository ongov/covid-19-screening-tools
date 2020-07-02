import React, { useContext } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

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

const Approved = () => {
  const { courthouse } = useContext(GlobalStateContext)
  const date = new Date()
  const { address, city, postalCode } = getAddressPieces(courthouse)

  function getAddressPieces(courthouse) {
    // This is required because we want this to run on the UI side.
    // We add a check for Gatsby to skip this during build.
    if (!courthouse) return {}

    const [address, cityAndPostalCode] = courthouse.address.split(",")
    const [city, postalCode] = cityAndPostalCode.split(" ON ")
    return { address, city, postalCode }
  }

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
        heading={"You can enter"}
        icon={<HeadingCheckmark />}
        color={Green}
        titleColor={"#d1efd4"}
      />
      <ContentBlock lang={lang} icon={<Calendar />} heading={format(date, "MMMM d, yyyy", { locale: en })}>
        valid from {format(date, "h:m aa", { locale: en })} to 11:59 p.m
      </ContentBlock>
      <ContentBlock lang={lang} icon={<MapPin />} heading={"You can enter"}>
        {courthouse && courthouse.court_name}
        <br />
        {address}
        <br />
        {city && city.trim()} Ontario
        <br />
        {postalCode}
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
}

export default Approved
