import React, { useContext } from "react"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question"
import YesNoButtons from "../components/yes-no-buttons"
import { questions } from "../shared"

export default ({ lang, screenerType, yesLink, noLink, children }) => {
  const state = useContext(GlobalStateContext)

  return (
    <Layout lang={lang} screenerType={screenerType}>
      <SEO lang={lang} screenerType={screenerType} />
      <SkipNavContent>
        <Question
          lang={lang}
          title={general[lang][screenerType].title}
          buttons={
            <YesNoButtons
              lang={lang}
              yesLink={`${general[lang][screenerType].basePath}${questions[yesLink(state)][lang]}`}
              noLink={`${general[lang][screenerType].basePath}${questions[noLink(state)][lang]}`}
            />
          }
        >
          {children}
        </Question>
      </SkipNavContent>
    </Layout>
  )
}
