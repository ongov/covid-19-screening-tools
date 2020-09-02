import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "school"

const SymptomsConfirm = () => (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q9.yes}
    noLink={logic[screenerType].q9.no}
  >
    <h2>Are your symptoms normal for you (related to seasonal allergies or a chronic medical condition/illness)?</h2>
    <p>A chronic condition/illness is one that goes on for a long time and often does not go away completely. </p>
  </QuestionTemplate>
)

export default SymptomsConfirm
