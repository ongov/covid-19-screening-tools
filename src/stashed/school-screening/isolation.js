import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const SelfIsolation = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="en"
      screenerType={screenerType}
      yesLink={logic[screenerType].q3.yes}
      noLink={logic[screenerType].q3.no}
    >
      {state.screenie && state.screenie === "guardian" ? (
        <h2>
          Has a doctor, health care provider, or public health unit told them that they should currently be isolating
          (staying at home)?
        </h2>
      ) : (
        <h2>
          Has a doctor, health care provider, or public health unit told you that you should currently be isolating (staying
          at home)?
        </h2>
      )}
    </QuestionTemplate>
  )
}

export default SelfIsolation
