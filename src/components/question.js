import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"

import "../stylesheets/forms.css"
import "../stylesheets/question.css"

import BackBlueIcon from "../images/inline-svgs/ontario-icon-back-blue.inline.svg"

import { GlobalStateContext } from "../context/global-context-provider"
import { general, getLocalizedSchoolDataField } from "../localized_content"

const LocationHeading = styled.p`
  font-weight: bold;
  color: #666666;
  margin-bottom: 0;
`

const BackBlueChevron = styled(BackBlueIcon)`
  display: inline-block;
  width: 0.9rem;
  height: 0.9rem;
`

export default ({ lang, title, buttons, children }) => {
  const state = useContext(GlobalStateContext)
  const localizedSchoolNameField = getLocalizedSchoolDataField(lang, "School Name")

  return (
    <div className="ontario-row">
      <div className="ontario-small-12 ontario-columns">
        <div className="ontario-question-content__wrapper--outer">
          {state && state.courthouse && (
            <LocationHeading>
              {lang === "fr" ? state.courthouse.court_name_fr : state.courthouse.court_name}
            </LocationHeading>
          )}
          {state && state.school && state.school.value && state.school.value[localizedSchoolNameField] && (
            <LocationHeading>{state.school.value[localizedSchoolNameField]}</LocationHeading>
          )}
          <h1>{title}</h1>
          <button
            className="ontario-button--tertiary ontario-form--link backBtn"
            tabIndex="0"
            type="button"
            onClick={() => navigate(-1)}
          >
            <BackBlueChevron aria-hidden="true" />
            {` ${general[lang].backButtonText}`}
          </button>
          <SkipNavContent>
            <div className="ontario-question-content__wrapper--inner">{children}</div>
          </SkipNavContent>
          {buttons}
        </div>
      </div>
    </div>
  )
}
