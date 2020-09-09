import React, { useContext } from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

import DeniedTemplate from "../../templates/courthouse/denied-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Warning from "../../images/inline-svgs/ontario-icon-warning.inline.svg"
import styled from "styled-components"
import { results } from "../../localized_content"

const lang = "en"

const HeaderDate = styled.span`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const Denied = () => {
  const { courthouse } = useContext(GlobalStateContext)

  return (
    <DeniedTemplate lang={lang} screenerType="courthouse">
      <HeaderDate>
        <ContentBlock
          lang={lang}
          icon={<Warning />}
          heading={`${results[lang].deniedSubHeading} ${courthouse && courthouse.court_name}`}
        >
          on {format(new Date(), "MMMM d, yyyy", { locale: en })}
        </ContentBlock>
      </HeaderDate>
    </DeniedTemplate>
  )
}

export default Denied
