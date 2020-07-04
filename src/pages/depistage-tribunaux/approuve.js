import React from "react"
import { format } from "date-fns"
import fr from "date-fns/locale/fr-CA"

import ApprovedTemplate from "../../templates/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"

const lang = "fr"

const Approved = () => {
  const date = new Date()

  return (
    <ApprovedTemplate lang={lang}>
      <ContentBlock
        lang={lang}
        icon={<Calendar />}
        heading={`Valide le ${format(date, "MMMM d, yyyy", { locale: fr })},`}
      >
        {`de ${format(date, "HH 'h' mm", { locale: fr })} à 11:59 p.m`}
      </ContentBlock>
    </ApprovedTemplate>
  )
}

export default Approved
