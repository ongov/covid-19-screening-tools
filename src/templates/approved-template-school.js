import React, { useRef, useContext } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"
import Callout from "../components/callout-blue"
import SEO from "../components/seo"
import { GlobalStateContext } from "../context/global-context-provider"

import { feedback, resultsSchool } from "../localized_content"

import LargeCheckmark from "../images/ontario-icon-checkmark-large.svg"
import SmallCheckmark from "../images/ontario-icon-checkmark-small.svg"
import Information from "../images/ontario-icon-information.svg"
import MapPin from "../images/ontario-icon-map-pin.svg"
import StaySafe from "../images/ontario-icon-stay-safe.svg"
import FeedbackIcon from "../images/ontario-icon-feedback.svg"

import { navigateHome } from "../shared"
import { navigate } from "gatsby"

const Green = "#118847"

const HeadingCheckmark = styled.div`
  background-image: url(${LargeCheckmark});
  background-size: 100%;
  display: block;
  width: 120px;
  height: 94px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Green};
`

const IconMapPin = styled.span`
  background-image: url(${MapPin});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 3rem;
`

const IconInfo = styled.span`
  background-image: url(${Information});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.35rem;
`

const IconStaySafe = styled.span`
  background-image: url(${StaySafe});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.75rem;
`

const FooterCheckmark = styled.span`
  background-image: url(${SmallCheckmark});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 1.8rem;
`

const Hyperlink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`

const IconFeedback = styled.span`
  background-image: url(${FeedbackIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.1rem;
`

const Approved = ({ children, lang }) => {
  const elToPrintRef = useRef(null)
  const { school } = useContext(GlobalStateContext)

  return (
    <span ref={elToPrintRef}>
      <Layout lang={lang} screenerType="school" hideFooter>
        <SkipNavContent>
          <Header
            title={`${school.value["School Name"]} ${resultsSchool[lang].title}`}
            heading={`${resultsSchool[lang].approveHeading}`}
            icon={<HeadingCheckmark />}
            color={Green}
            titleColor={"#d1efd4"}
          />
          {children}
          <ContentBlock lang={lang} icon={<IconMapPin />} heading={`${resultsSchool[lang].approveSubHeading}`}>
            {school.value["School Name"]}
          </ContentBlock>
          <ContentBlock lang={lang} icon={<IconInfo />} heading={`${resultsSchool[lang].nextSteps}`}>
            <>
              <p>{resultsSchool[lang].nextStepsContent} </p>
            </>
          </ContentBlock>
          <ContentBlock lang={lang}>
            <p>
              <Hyperlink onClick={() => navigateHome(lang)}>{resultsSchool[lang].nextStepsLinkText}</Hyperlink>&nbsp;
              {resultsSchool[lang].nextStepsInstruction}
            </p>
          </ContentBlock>
          <ContentBlock lang={lang}>
            {resultsSchool[lang].HealthAndSafetyTips}{" "}
            <p>
              <Hyperlink href={resultsSchool[lang].HealthAndSafetyLink} target="_blank" rel="noopener">
                {resultsSchool[lang].HealthAndSafetyLinkText}
              </Hyperlink>
            </p>
          </ContentBlock>
          <ContentBlock lang={lang} icon={<IconStaySafe />} heading={`${resultsSchool[lang].staySafe}`}>
            {resultsSchool[lang].downloadApp}
            <p>
              <Hyperlink href={resultsSchool[lang].downloadAppLink} target="_blank" rel="noopener">
                {resultsSchool[lang].downloadAppLinkText}
              </Hyperlink>
            </p>
          </ContentBlock>
          <Callout lang={lang} icon={<IconFeedback />} heading={`${feedback[lang].title}`}>
            <a href={feedback[lang].link} rel="noopener" target="_blank">
              {feedback[lang].content}
            </a>
          </Callout>
          <Footer icon={<FooterCheckmark />} color={Green} />
        </SkipNavContent>
      </Layout>
    </span>
  )
}

export default Approved
