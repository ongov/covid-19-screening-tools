import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const SelfIsolation = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q3.yes}
    noLink={logic[screenerType].q3.no}
  >
    <h2>
      Has a doctor, health care provider, or public health unit told you that you should be self-isolating (staying at
      home) today?
    </h2>
  </QuestionTemplate>
)

export default SelfIsolation
