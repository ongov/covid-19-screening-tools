import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const TestPositif  = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="fr"
      screenerType={screenerType}
      yesLink={logic[screenerType].q4.yes}
      noLink={logic[screenerType].q4.no}
    >
        {state.screenie && state.screenie === "guardian" ? (
        <h2>Au cours des 14 derniers jours, ont-ils reçu un résultat positif à un test de dépistage de la COVID-19?</h2>
      ) : (
        <h2>Au cours des 14 derniers jours, avez-vous reçu un résultat positif à un test de dépistage de la COVID-19?</h2>
      )}
    </QuestionTemplate>
  )
}

export default TestPositif
