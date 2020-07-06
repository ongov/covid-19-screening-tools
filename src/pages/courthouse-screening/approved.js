import React from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import ApprovedTemplate from "../../templates/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import "../../stylesheets/pdf-styles.css"

const lang = "en"

const Approved = () => {
  const date = new Date()

  return (
    <ApprovedTemplate lang={lang}>
      <ContentBlock lang={lang} icon={<Calendar />} heading={format(date, "MMMM d, yyyy", { locale: en })}>
        valid from {format(date, "h:mm aa", { locale: en })} to 11:59 p.m
      </ContentBlock>
    </ApprovedTemplate>
  )
}

export default Approved
