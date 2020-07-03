import React, { useContext } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

import ApprovedTemplate from "../../templates/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import MapPin from "../../images/inline-svgs/ontario-icon-map-pin.inline.svg"

const lang = "en"

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
    <ApprovedTemplate lang={lang}>
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
    </ApprovedTemplate>
  )
}

export default Approved
