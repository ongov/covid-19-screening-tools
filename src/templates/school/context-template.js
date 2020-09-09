import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Question from "../../components/question"
import ContinueButton from "../../components/continue-button"
import Radio from "../../components/radio"

import { GlobalStateContext, GlobalDispatchContext } from "../../context/global-context-provider"
import { logic, questions } from "../../shared"
import { general, schoolContextChoices, schoolContextContent } from "../../localized_content"

const screenerType = "school"

export default ({ lang }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  const [continueDisabled, setContinueDisabled] = useState(true)

  const handleOptionSelect = e => {
    setContinueDisabled(false)

    if (e && e.target && e.target.value) {
      dispatch({
        type: "SCREENIE_SELECTED",
        screenie: e.target.value,
      })
    }
  }

  const handleContinueClick = () => {
    navigate(`${general[lang]["school"].basePath}${questions[logic["school"]["q8"].cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang} screenerType={screenerType}>
      <SEO lang={lang} screenerType={screenerType} />
      <Question
        screenerType={screenerType}
        lang={lang}
        title={general[lang]["school"].title}
        buttons={<ContinueButton lang={lang} clickHandler={handleContinueClick} isDisabled={continueDisabled} />}
      >
        <h2>{schoolContextContent[lang].heading}</h2>
        <div className="ontario-form-group">
          <fieldset className="ontario-fieldset">
            <legend className="ontario-show-for-sr">{schoolContextContent[lang].heading}</legend>
            <div className="ontario-question__options">
              <div className="ontario-radios">
                {schoolContextChoices[lang] &&
                  schoolContextChoices[lang].map(item => (
                    <Radio
                      key={item.id}
                      labelText={item.labelText}
                      supplementaryText={item.supplementaryText}
                      name="q8-context"
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
