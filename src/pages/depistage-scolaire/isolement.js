import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const LautoIsolement = () => {
  const state = useContext(GlobalStateContext)

  return (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q3.yes}
    noLink={logic[screenerType].q3.no}
  >
      {state.screenie && state.screenie === "guardian" ? (
          <h2>Un médecin, fournisseur de soins de santé ou bureau de santé publique leur a-t-il dit qu’ils devraient actuellement s'isoler (en restant à la maison)? </h2>
    ) : (
          <h2>Un médecin, fournisseur de soins de santé ou bureau de santé publique vous a-t-il dit que vous devriez actuellement vous isoler (en restant à la maison)? </h2>
         )}
    </QuestionTemplate>
  )
}

export default LautoIsolement
