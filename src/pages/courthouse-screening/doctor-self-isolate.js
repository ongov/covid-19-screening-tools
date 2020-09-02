import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const DoctorSelfIsolate = () => (
  <QuestionTemplate lang="en" type="courthouse" yesLink={logic.q7.yes} noLink={logic.q7.no}>
    <h2>Did the doctor, health care provider, or public health unit tell you to self-isolate (stay at home)?</h2>
  </QuestionTemplate>
)

export default DoctorSelfIsolate
