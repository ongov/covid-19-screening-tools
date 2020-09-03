import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const PositiveTest = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q4.yes}
      noLink={logic[screenerType].q4.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>In the last 14 days, have they tested positive for COVID-19?</h2>
      ) : (
        <h2>In the last 14 days, have you tested positive for COVID-19?</h2>
      )}
    </QuestionTemplate>
  )
}

export default PositiveTest
