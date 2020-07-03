import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const SelfIsolation = () => (
  <QuestionTemplate lang="en" yesLink={logic.q3.yes} noLink={logic.q3.no}>
    <h2>
      Have you been asked to self-isolate (stay at home) by a doctor, health care provider or public health unit in the
      past 14 days?
    </h2>
  </QuestionTemplate>
)

export default SelfIsolation
