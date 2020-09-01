import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Cleared = () => (
  <QuestionTemplate lang="en" yesLink={logic.q6.yes} noLink={logic.q6.no}>
    <h2>
      After being in close physical contact with that person, have you talked to a doctor, health care provider, or
      public health unit?
    </h2>
  </QuestionTemplate>
)

export default Cleared
