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
          Are their symptoms normal for them (related to seasonal allergies or a chronic medical condition/illness)?
        </h2>
      ) : (
        <h2>
          Are your symptoms normal for you (related to seasonal allergies or a chronic medical condition/illness)?
        </h2>
      )}
      <p>A chronic condition/illness is one that goes on for a long time and often does not go away completely. </p>
    </QuestionTemplate>
  )
}

export default SymptomsConfirm
