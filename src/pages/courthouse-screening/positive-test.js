import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const PositiveTest = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q4.yes}
    noLink={logic[screenerType].q4.no}
  >
    <h2>In the last 14 days, have you either:</h2>
    <ul>
      <li>tested positive for COVID-19? or</li>
      <li>been in close physical contact with someone who recently tested positive for COVID-19?</li>
    </ul>
    <p>Close physical contact means:</p>
    <ul>
      <li>being less than 2 metres away in the same room, workspace, or area</li>
      <li>living in the same home</li>
    </ul>
  </QuestionTemplate>
)

export default PositiveTest
