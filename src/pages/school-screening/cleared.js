import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const Cleared = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q6.yes}
      noLink={logic[screenerType].q6.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>
          After being in close physical contact with that person, have they talked to a doctor, health care provider, or
          public health unit?
        </h2>
      ) : (
        <h2>
          After being in close physical contact with that person, have you talked to a doctor, health care provider, or
          public health unit?
        </h2>
      )}
    </QuestionTemplate>
  )
}

export default Cleared
