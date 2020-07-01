import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"

import "../stylesheets/forms.css"
import "../stylesheets/question.css"

import { GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"

const Courthouse = styled.p`
  font-weight: bold;
  color: #666666;
  margin-bottom: 0;
`

const Question = ({ lang, title, buttons, children }) => {
  const state = useContext(GlobalStateContext)

  return (
    <div className="ontario-question-content__wrapper--outer">
      {state && state.courthouse && <Courthouse>{state.courthouse.court_name}</Courthouse>}
      <h1>{title}</h1>
      <button
        className="ontario-button--tertiary ontario-form--link backBtn"
        tabIndex="0"
        type="button"
        onClick={() => navigate(-1)}
      >
        <i className="ontario-icon ontario-icon__back-blue" aria-hidden="true"></i>
        {` ${general[lang].backButtonText}`}
      </button>
      <SkipNavContent>
        <div className="ontario-question-content__wrapper--inner">{children}</div>
      </SkipNavContent>
      {buttons}
    </div>
  )
}

export default Question
