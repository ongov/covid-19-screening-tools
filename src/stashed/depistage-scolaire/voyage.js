import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const Voyage = () => {
    const state = useContext(GlobalStateContext)
    return (
      <QuestionTemplate
        lang = "fr"
        screenerType = {screenerType}
        yesLink = {logic[screenerType].q2.yes}
        noLink = {logic[screenerType].q2.no}
        >
      {
          state.screenie && state.screenie === "guardian" ? (
            <h2>Ont-ils voyagé à l’extérieur du Canada au cours des 14 derniers jours? </h2>
    ) : (
    <h2>Avez-vous voyagé à l’extérieur du Canada au cours des 14 derniers jours?</h2>
    )
    }
    </QuestionTemplate>
    )
}

export default Voyage
