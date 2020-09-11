import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const SymptomsConfirm = () => {
    const state = useContext(GlobalStateContext)

    return (
      <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q9.yes}
    noLink={logic[screenerType].q9.no}
      >
      {state.screenie && state.screenie === "guardian" ? (
            <h2>Leurs symptômes sont-ils normaux pour eux (en lien avec une cause ou un problème de santé connus)? </h2>
        ) : (
            <h2>Vos symptômes sont-ils normaux pour vous (en lien avec une cause ou un problème de santé connus)?</h2>
        )}
    </QuestionTemplate>
)
}

export default SymptomsConfirm