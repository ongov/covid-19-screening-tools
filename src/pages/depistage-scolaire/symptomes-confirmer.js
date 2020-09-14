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
            <>
            <h2>Leurs symptômes sont-ils normaux pour eux (en lien avec une cause ou un problème de santé connus)? </h2>
            <p>Ils devraient parler à un médecin s’ils se sentent malade ou s’ils pensent avoir un rhume ou une grippe, car les symptômes sont similaires à ceux de la COVID-19.</p>
            </>
        ) : (
            <>
            <h2>Vos symptômes sont-ils normaux pour vous (en lien avec une cause ou un problème de santé connus)?</h2>
            <p>Vous devriez parler à un médecin si vous vous sentez malade ou si vous pensez avoir un rhume ou une grippe, car les symptômes sont similaires à ceux de la COVID-19.</p>
            </>
        )}
    </QuestionTemplate>
)
}

export default SymptomsConfirm