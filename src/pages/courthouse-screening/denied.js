import React, { useContext } from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

import DeniedTemplate from "../../templates/denied-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Warning from "../../images/inline-svgs/ontario-icon-warning.inline.svg"

const lang = "en"

const Denied = () => {
  const { courthouse } = useContext(GlobalStateContext)

  return (
    <DeniedTemplate lang={lang}>
      <ContentBlock lang={lang} icon={<Warning />} heading={`You cannot enter ${courthouse && courthouse.court_name}`}>
        on {format(new Date(), "MMMM d, yyyy", { locale: en })}
      </ContentBlock>
    </DeniedTemplate>
  )
}

export default Denied
