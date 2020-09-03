import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const DoctorSelfIsolate = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q7.yes}
      noLink={logic[screenerType].q7.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>Did the doctor, health care provider, or public health unit tell them to self-isolate (stay at home)?</h2>
      ) : (
        <h2>Did the doctor, health care provider, or public health unit tell you to self-isolate (stay at home)?</h2>
      )}
    </QuestionTemplate>
  )
}

export default DoctorSelfIsolate
