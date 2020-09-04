import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalDispatchContext } from "../context/global-context-provider"
import Checkbox from "../components/checkbox"
import { general, symptomsTitle, symptoms } from "../localized_content"
import { logic, questions, useGlobalState } from "../shared"

const SymptomsTemplate = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const { isGuardian, state, state: { language, screener_type: screenerType, q1 } = {} } = useGlobalState()

  function handleContinueClick() {
    dispatch({ type: "SYMPTOMS_CONTINUE_CLICKED" })
    navigate(`${general[language][screenerType].basePath}${questions[logic[screenerType].q1.cont(state)][language]}`)
  }

  return (
    <Layout lang={language} screenerType={screenerType}>
      <SEO lang={language} />
      <SkipNavContent>
        <Question
          lang={language}
          title={general[language][screenerType].title}
          buttons={<ContinueButton lang={language} clickHandler={handleContinueClick} />}
        >
          <div className="ontario-form-group">
            <fieldset className="ontario-fieldset">
              <legend>{isGuardian ? symptomsTitle[language].alt_text : symptomsTitle[language].text}</legend>
              <p>{symptomsTitle[language].sup_text}</p>
              <div className="ontario-question__options">
                <div className="ontario-checkboxes">
                  {Object.keys(symptoms).map(id => (
                    <Checkbox
                      key={id}
                      id={id}
                      value={id}
                      text={symptoms[id][language].text}
                      labelStyle="--large"
                      supplementaryText={symptoms[id][language].sup_text || ""}
                      checkboxState={q1 && q1.hasOwnProperty(id)}
                      checkboxOnChange={() => dispatch({ type: "TOGGLE_SYMPTOM", id })}
                    />
                  ))}
                </div>
              </div>
            </fieldset>
          </div>
        </Question>
      </SkipNavContent>
    </Layout>
  )
}

export default SymptomsTemplate
