import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Voyage = () => (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q2.yes}
    noLink={logic[screenerType].q2.no}
  >
    <h2>Avez-vous voyagé à l’extérieur du Canada au cours des 14&nbsp;derniers jours?</h2>
    <p>Sont exclus les travailleurs essentiels qui traversent de façon régulière la frontière Canada-États-Unis. </p>
  </QuestionTemplate>
)

export default Voyage
