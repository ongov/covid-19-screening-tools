import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const PositiveTest = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>Avez-vous été déclaré(e) positif(ve) à la COVID-19 au cours des 14 derniers jours?</h2>
  </QuestionTemplate>
)

export default PositiveTest
