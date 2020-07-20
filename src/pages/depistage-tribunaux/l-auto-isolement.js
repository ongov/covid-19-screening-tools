import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const SelfIsolation = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>
      Un médecin, un bureau de santé local ou un fournisseur de soins de santé vous a-t-il recommandé de vous
      auto-isoler (rester chez vous) au cours des 14 derniers jours?
    </h2>
  </QuestionTemplate>
)

export default SelfIsolation
