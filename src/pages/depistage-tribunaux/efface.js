import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Efface = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>
      After being in close physical contact with that person, have you been told by a doctor, health care provider, or
      public health unit to self-isolate (stay at home)?
    </h2>
  </QuestionTemplate>
)

export default Efface
