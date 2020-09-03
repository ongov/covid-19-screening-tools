import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"
import SEO from "../components/seo"

import { navigateHome, pushOutcomeDataToGTM } from "../shared"

import CancelLarge from "../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../images/inline-svgs/ontario-icon-cancel-small.inline.svg"

import { feedback, resultsSchool } from "../localized_content"
import Callout from "../components/callout-blue"
import FeedbackIcon from "../images/ontario-icon-feedback.svg"
import Information from "../images/ontario-icon-information-red.svg"
import StaySafe from "../images/ontario-icon-stay-safe.svg"


const Red = "#D81A21"

const Hyperlink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`

const IconStaySafe = styled.span`
  background-image: url(${StaySafe});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.75rem;
`

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

  // useEffect(() => {
  //   if (!courthouse) return

  //   pushOutcomeDataToGTM({
  //     pass: false,
  //     courthouse,
  //     lang,
  //   })
  // }, [])

  return (
    <Layout lang={lang} screenerType={screenerType} hideFooter>
      <SEO lang={lang} screenerType={screenerType} />
      <SkipNavContent>
        <Header
          title={<>{`${school && school.value && school.value["School Name"]} ${resultsSchool[lang].title}`}</>}
          heading={`${resultsSchool[lang].deniedHeading}`}
          icon={<HeadingDeniedIcon />}
          color={Red}
          titleColor={"#FFE0E2"}
        />
        {children}
        <ContentBlock lang={lang} icon={<IconInfo />} heading={`${resultsSchool[lang].nextSteps}`}>
          <>
            <p>{resultsSchool[lang].nextStepsDeniedContent} </p>
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
