import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const MedecinAutoIsolement = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>
      Le médecin, le fournisseur de soins de santé ou le responsable d’un service de santé publique vous a-t-il dit de
      vous isoler (rester à la maison)?
    </h2>
  </QuestionTemplate>
)

export default MedecinAutoIsolement
