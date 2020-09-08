import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"
import SEO from "../components/seo"

import { pushSchoolOutcomeDataToGTM } from "../shared"

import CancelLarge from "../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../images/inline-svgs/ontario-icon-cancel-small.inline.svg"

import { feedback, resultsSchool, getLocalizedSchoolDataField } from "../localized_content"
import Callout from "../components/callout-blue"
import FeedbackIcon from "../images/ontario-icon-feedback.svg"
import Information from "../images/ontario-icon-information-red.svg"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: block;
  width: 120px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Red};
`

const IconInfo = styled.span`
  background-image: url(${Information});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.35rem;
`

const IconFeedback = styled.span`
  background-image: url(${FeedbackIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.1rem;
`

const Denied = ({ lang, children, screenerType }) => {
  const { school } = useContext(GlobalStateContext)
  const state = useContext(GlobalStateContext)
  const localizedSchoolNameField = getLocalizedSchoolDataField(lang, "School Name")

  useEffect(() => {
    pushSchoolOutcomeDataToGTM({ state, lang, pass: false })
  }, [])

  return (
    <Layout lang={lang} screenerType={screenerType} hideFooter>
      <SEO lang={lang} screenerType={screenerType} />
      <SkipNavContent>
        <Header
          title={
            school && school.value && school.value[localizedSchoolNameField]
              ? `${school.value[localizedSchoolNameField]} ${resultsSchool[lang].title}`
              : resultsSchool[lang].title
          }
          heading={`${resultsSchool[lang].deniedHeading}`}
          icon={<HeadingDeniedIcon />}
          color={Red}
          titleColor={"#FFE0E2"}
        />
        {children}
        <ContentBlock lang={lang} icon={<IconInfo />} heading={`${resultsSchool[lang].nextSteps}`}>
          <>
            {state.screenie && state.screenie === "guardian" ? (
              <>
                <p>{resultsSchool[lang].nextStepsDeniedContentThem}</p>
              </>
            ) : (
              <>
                <p>{resultsSchool[lang].nextStepsDeniedContentYou}</p>
              </>
            )}
          </>
        </ContentBlock>
        <ContentBlock lang={lang} heading={`${resultsSchool[lang].GoingtoSchoolHeading}`}>
          <>
            {state.screenie && state.screenie === "guardian" ? (
              <>
                <p>{resultsSchool[lang].GoingtoSchoolThem}</p>
              </>
            ) : (
              <>
                <p>{resultsSchool[lang].GoingtoSchoolYou}</p>
              </>
            )}
          </>
        </ContentBlock>
        <Callout lang={lang} icon={<IconFeedback />} heading={`${feedback[lang].title}`}>
          <a href={feedback[lang].link} rel="noopener" target="_blank">
            {feedback[lang].content}
          </a>
        </Callout>
        <Footer icon={<CancelSmall />} color={Red} />
      </SkipNavContent>
    </Layout>
  )
}

export default Denied
