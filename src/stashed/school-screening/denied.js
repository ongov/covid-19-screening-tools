import React, { useContext } from "react"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"

import { GlobalStateContext } from "../../context/global-context-provider"

import DeniedTemplate from "../../templates/school/denied-template"
import ContentBlock from "../../components/outcome-content-block-with-icon"

import Warning from "../../images/inline-svgs/ontario-icon-warning.inline.svg"
import styled from "styled-components"
import { resultsSchool, getLocalizedSchoolDataField } from "../../localized_content"

const lang = "en"

const HeaderDate = styled.span`
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.4375rem;
  font-weight: bold;
  line-height: 1.4;
`

const Denied = () => {
  const { school } = useContext(GlobalStateContext)

  return (
    <DeniedTemplate lang={lang} screenerType="school">
      <HeaderDate>
        <ContentBlock
          lang={lang}
          icon={<Warning />}
          heading={`${resultsSchool[lang].deniedSubHeading} ${
            school && school.value ? school.value[getLocalizedSchoolDataField(lang, "School Name")] : "school"
          }`}
        >
          on {format(new Date(), "MMMM d, yyyy", { locale: en })}
        </ContentBlock>
      </HeaderDate>
    </DeniedTemplate>
  )
}

export default Denied
