import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Cleared = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q6.yes}
    noLink={logic[screenerType].q6.no}
  >
    <h2>
      After being in close physical contact with that person, have you talked to a doctor, health care provider, or
      public health unit?
    </h2>
  </QuestionTemplate>
)

export default Cleared
