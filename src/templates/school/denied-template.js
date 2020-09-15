import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Header from "../../components/outcome-header"
import Footer from "../../components/outcome-footer"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import Callout from "../../components/callout-blue"

import { pushSchoolOutcomeDataToGTM } from "../../shared"
import { feedback, resultsSchool } from "../../localized_content"
import { GlobalStateContext } from "../../context/global-context-provider"

import CancelLarge from "../../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../../images/inline-svgs/ontario-icon-cancel-small.inline.svg"
import FeedbackIcon from "../../images/ontario-icon-feedback.svg"
import Information from "../../images/ontario-icon-information-red.svg"
import SchoolIcon from "../../images/return_to_school.svg"
import SiblingsIcon from "../../images/ontario-icon-siblings.svg"

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

const IconSchool = styled.span`
  background-image: url(${SchoolIcon});
  background-size: 100%;
  display: inline-block;
  width: 3.35rem;
  height: 3.1rem;
  margin-top: -0.4rem;
`

const IconSiblings = styled.span`
  background-image: url(${SiblingsIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 3rem;
  margin-top: -0.4rem;
`

const screenerType = "school"

export default ({ lang, children }) => {
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    pushSchoolOutcomeDataToGTM({ state, lang, pass: false })
  }, [])

  return (
    <Layout lang={lang} screenerType={screenerType} hideFooter>
      <SEO lang={lang} screenerType="school" />
      <SkipNavContent>
        <Header
          title={resultsSchool[lang].title}
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
        <ContentBlock lang={lang} icon={<IconSiblings />} heading={resultsSchool[lang].siblingsHeading}>
          {resultsSchool[lang].siblingsContent}
        </ContentBlock>
        <ContentBlock lang={lang} icon={<IconSchool />} heading={`${resultsSchool[lang].GoingtoSchoolHeading}`}>
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
