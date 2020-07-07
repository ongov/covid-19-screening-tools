import React from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import ApprovedTemplate from "../../templates/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import "../../stylesheets/pdf-styles.css"
import styled from "styled-components";

const lang = "en"

const HeaderDate = styled.div`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const Approved = () => {
  const date = new Date()

  return (
    <ApprovedTemplate lang={lang}>
      <HeaderDate><ContentBlock lang={lang} icon={<Calendar />} heading={format(date, "MMMM d, yyyy", { locale: en })}>
        valid from {format(date, "' 'h':'mm' 'aaaa' ", { locale: en })} to 11:59 p.m.
      </ContentBlock></HeaderDate>
    </ApprovedTemplate>
  )
}

export default Approved
