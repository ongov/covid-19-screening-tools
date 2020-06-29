import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Contact = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>In the past 14 days, have you been in close physical contact with a person who:</h2>
    <ul>
      <li>is currently sick with a new cough, fever, or difficulty breathing? or</li>
      <li>tested positive for COVID-19? or</li>
      <li>returned from outside Canada in the last 2 weeks?</li>
    </ul>
    <p>Close physical contact means:</p>
    <ul>
      <li>being less than 2 metres away in the same room, workspace, or area</li>
      <li>living in the same home</li>
    </ul>
  </QuestionTemplate>
)

export default Contact
