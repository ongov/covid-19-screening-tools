import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Efface = () => (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q6.yes}
    noLink={logic[screenerType].q6.no}
  >
    <h2>
      Après avoir été en contact physique étroit* avec cette personne, avez-vous parlé à unmédecin, à un fournisseur de
      soins de santé ou à un responsable d’un service de santé publique?
    </h2>
  </QuestionTemplate>
)

export default Efface
