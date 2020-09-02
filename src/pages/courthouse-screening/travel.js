import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Travel = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q2.yes}
    noLink={logic[screenerType].q2.no}
  >
    <h2>Have you travelled outside of Canada in the last 14 days?</h2>
    <p>This does not include essential workers who cross the Canada-US border regularly. </p>
  </QuestionTemplate>
)

export default Travel
