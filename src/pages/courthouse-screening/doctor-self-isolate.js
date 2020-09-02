import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const DoctorSelfIsolate = () => (
  <QuestionTemplate
    lang="en"
    screenerType={screenerType}
    yesLink={logic[screenerType].q7.yes}
    noLink={logic[screenerType].q7.no}
  >
    <h2>Did the doctor, health care provider, or public health unit tell you to self-isolate (stay at home)?</h2>
  </QuestionTemplate>
)

export default DoctorSelfIsolate
