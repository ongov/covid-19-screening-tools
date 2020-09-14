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
        <>
        <h2>
          Are their symptoms normal for them (related to a known cause or condition)?
        </h2>
        <p>They should talk with a doctor if they feel sick or think they have the cold or flu because symptoms are similar to COVID-19.</p>
        </>
      ) : (
        <>
        <h2>
          Are your symptoms normal for you (related to a known cause or condition)?
        </h2>
        <p>You should talk with a doctor if you feel sick or think you have the cold or flu because symptoms are similar to COVID-19.</p>
        </>
      )}
    </QuestionTemplate>
  )
}

export default SymptomsConfirm
