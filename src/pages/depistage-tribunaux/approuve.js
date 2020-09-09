import React from "react"
import { format } from "date-fns"
import fr from "date-fns/locale/fr-CA"

import ApprovedTemplate from "../../templates/courthouse/approved-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import styled from "styled-components"

const lang = "fr"

const HeaderDate = styled.div`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const Approuve = () => {
  const date = new Date()

  return (
    <ApprovedTemplate lang={lang} screenerType="courthouse">
      <HeaderDate>
        <ContentBlock lang={lang} icon={<Calendar />} heading={`Valide le ${format(date, "PPP", { locale: fr })},`}>
          {`de ${format(date, "HH 'h' mm", { locale: fr })} à 23 h 59`}
        </ContentBlock>
      </HeaderDate>
    </ApprovedTemplate>
  )
}

export default Approuve
