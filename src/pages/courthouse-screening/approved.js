import React from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import ApprovedTemplate from "../../templates/courthouse/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/ontario-icon-calendar.svg"
import "../../stylesheets/pdf-styles.css"
import styled from "styled-components"

const lang = "en"

const HeaderDate = styled.div`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const IconCalendar = styled.span`
  background-image: url(${Calendar});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.28rem;
`

const Approved = () => {
  const date = new Date()

  return (
    <ApprovedTemplate lang={lang} screenerType="courthouse">
      <HeaderDate>
        <ContentBlock
          lang={lang}
          icon={<IconCalendar />}
          heading={`Valid ${format(date, "MMMM d, yyyy", { locale: en })}`}
        >
          from {format(date, "' 'h':'mm' 'aaaa' ", { locale: en })} to 11:59 p.m.
        </ContentBlock>
      </HeaderDate>
    </ApprovedTemplate>
  )
}

export default Approved
