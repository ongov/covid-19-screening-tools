import React, { useContext } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import ContinueButton from "../components/continue-button"
import { GlobalStateContext, GlobalDispatchContext } from "../context/global-context-provider"
import Checkbox from "../components/checkbox"
import { general, symptomsTitle, symptoms } from "../localized_content"
import { logic, questions } from "../shared"

const SymptomsTemplate = ({ lang }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  function handleContinueClick() {
    dispatch({ type: "SYMPTOMS_CONTINUE_CLICKED" })
    navigate(`${general[lang].basePath}${questions[logic.q5.cont(state)][lang]}`)
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <SkipNavContent>
        <Question
          lang={lang}
          title={general[lang].title}
          buttons={<ContinueButton lang={lang} clickHandler={handleContinueClick} />}
        >
          <div className="ontario-form-group">
            <fieldset className="ontario-fieldset">
              <legend>{symptomsTitle[lang]}</legend>
              <div className="ontario-question__options">
                <div className="ontario-checkboxes">
                  {Object.keys(symptoms).map(id => (
                    <Checkbox
                      key={id}
                      id={id}
                      value={id}
                      text={symptoms[id][lang].text}
                      labelStyle="--large"
                      supplementaryText={symptoms[id][lang].sup_text || ""}
                      checkboxState={state.q5 && state.q5.hasOwnProperty(id)}
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
