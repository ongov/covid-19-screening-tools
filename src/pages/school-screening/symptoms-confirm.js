import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const SymptomsConfirm = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q9.yes}
      noLink={logic[screenerType].q9.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>
          Are their symptoms normal for them (related to a known cause or condition)?
        </h2>
      ) : (
        <h2>
          Are your symptoms normal for you (related to a known cause or condition)?
        </h2>
      )}
    </QuestionTemplate>
  )
}

export default SymptomsConfirm
