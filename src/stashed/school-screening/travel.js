import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const Travel = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q2.yes}
      noLink={logic[screenerType].q2.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>Have they travelled outside of Canada in the last 14 days?</h2>
      ) : (
        <h2>Have you travelled outside of Canada in the last 14 days?</h2>
      )}
    </QuestionTemplate>
  )
}

export default Travel
