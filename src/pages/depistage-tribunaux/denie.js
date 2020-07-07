import React, { useContext } from "react"
import { format } from "date-fns"
import fr from "date-fns/locale/fr-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

import DeniedTemplate from "../../templates/denied-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Warning from "../../images/inline-svgs/ontario-icon-warning.inline.svg"

import { results } from "../../localized_content"
import styled from "styled-components";

const lang = "fr"

const HeaderDate = styled.span`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const Denied = () => {
  const { courthouse } = useContext(GlobalStateContext)

  return (
    <DeniedTemplate lang={lang}>
      <HeaderDate><ContentBlock
        lang={lang}
        icon={<Warning />}
        heading={`${results[lang].deniedHeading} ${courthouse && courthouse.court_name}`}
      >
        on {format(new Date(), "PPP", { locale: fr })}
      </ContentBlock></HeaderDate>
    </DeniedTemplate>
  )
}

export default Denied
