import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import { general, schoolContextChoices } from "../localized_content"
import Radio from "../components/radio"
import { logic, questions } from "../shared"

const ContextTemplate = ({ lang, question, questionId, title }) => {
  const radioButtonGroup = `${questionId}-context`

  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [continueDisabled, setContinueDisabled] = useState(true)

  const handleOptionSelect = e => {
    setContinueDisabled(false)

    dispatch({
      type: "SCREENIE_SELECTED",
      screenie: e.target.value,
    })
  }

  const handleContinueClick = () => {
    navigate(`${general[lang]["school"].basePath}${questions[logic["school"][questionId].cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang} screenerType="school">
      <Question
        screenerType="school"
        lang={lang}
        title={general[lang]["school"].title}
        buttons={<ContinueButton lang={lang} clickHandler={handleContinueClick} isDisabled={continueDisabled} />}
      >
        <h2>{question}</h2>
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <legend className="ontario-show-for-sr">{title}</legend>
            <div className="ontario-question__options">
              <div className="ontario-radios">
                {schoolContextChoices[lang] &&
                  schoolContextChoices[lang].map(item => (
                    <Radio
                      key={item.id}
                      labelText={item.labelText}
                      supplementaryText={item.supplementaryText}
                      name={radioButtonGroup}
                      id={item.id}
                      onChangeInner={handleOptionSelect}
                    />
                  ))}
              </div>
            </div>
          </fieldset>
        </div>
      </Question>
    </Layout>
  )
}

export default ContextTemplate
