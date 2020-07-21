import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Efface = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>
      Après avoir été en contact physique étroit avec cette personne, un médecin, un fournisseur de soins de santé ou un
      service de santé publique vous a-t-il dit de vous isoler (rester à la maison)?
    </h2>
  </QuestionTemplate>
)

export default Efface
