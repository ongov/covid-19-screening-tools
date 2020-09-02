import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const LautoIsolement = () => (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q3.yes}
    noLink={logic[screenerType].q3.no}
  >
    <h2>
      Un médecin, un professionnel de la santé ou le responsable d'un service de santé publique vous a-t-il demandé de
      vous isoler (rester à la maison) aujourd'hui?
    </h2>
  </QuestionTemplate>
)

export default LautoIsolement
