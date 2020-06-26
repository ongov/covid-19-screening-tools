import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="en" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>
      In the last 14 days, have you been in close physical contact with someone who tested positive for COVID-19?{" "}
    </h2>
    <p>Close physical contact means:</p>
    <ul>
      <li>being less than 2 metres away in the same room, workspace, or area</li>
      <li>living in the same home</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
