import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Contact = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q5.yes}
    noLink={logic[screenerType].q5.no}
  >
    <h2>In the last 14 days, have you been in close physical contact with a person who either:</h2>
    <ul>
      <li>is currently sick with new COVID-19 symptoms (like a cough, fever, or difficulty breathing)? or</li>
      <li>
        returned from outside Canada in the last 2 weeks with new COVID-19 symptoms (like a cough, fever, or difficulty
        breathing)?
      </li>
    </ul>
    <p>Close physical contact means:</p>
    <ul>
      <li>being less than 2 metres away in the same room, workspace, or area</li>
      <li>living in the same home</li>
    </ul>
  </QuestionTemplate>
)

export default Contact
