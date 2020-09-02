import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Efface = () => (
  <QuestionTemplate lang="fr" type="tribunaux" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>
      Après avoir été en contact physique étroit* avec cette personne, avez-vous parlé à unmédecin, à un fournisseur de
      soins de santé ou à un responsable d’un service de santé publique?
    </h2>
  </QuestionTemplate>
)

export default Efface
