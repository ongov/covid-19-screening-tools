import React, { useEffect, useRef, useContext } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"
import { savePDF } from "@progress/kendo-react-pdf"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"
import Callout from "../components/callout-blue"
import SEO from "../components/seo"
import { GlobalStateContext } from "../context/global-context-provider"

import { feedback, resultsSchool, schoolDataFields } from "../localized_content"

import LargeCheckmark from "../images/ontario-icon-checkmark-large.svg"
import SmallCheckmark from "../images/ontario-icon-checkmark-small.svg"
import Information from "../images/ontario-icon-information.svg"
import MapPin from "../images/ontario-icon-map-pin.svg"
import StaySafe from "../images/ontario-icon-stay-safe.svg"
import FeedbackIcon from "../images/ontario-icon-feedback.svg"
import DownloadIcon from "../images/ontario-icon-download.svg"

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
const HyperlinkButton = styled.a`
  background-color: #fff;
  border: 2px solid #06c;
  color: #06c;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  line-height: 1.55556;
  margin: 0 1.75rem 0 0;
  min-width: 10rem;
  padding: 0.625rem 1.5rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #e0f0ff;
    border-color: #00478f;
    color: #00478f;
    text-decoration: underline;
  }
`

const IconFeedback = styled.span`
  background-image: url(${FeedbackIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.1rem;
`

const IconDownload = styled.span`
  background-image: url(${DownloadIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.8rem;
`

const Approved = ({ children, lang, screenerType }) => {
  const elToPrintRef = useRef(null)
  const { school } = useContext(GlobalStateContext)
  const state = useContext(GlobalStateContext)
  const localizedSchoolNameField = lang === "en" ? "School Name" : schoolDataFields["School Name"]

  return (
    <span ref={elToPrintRef}>
      <Layout lang={lang} screenerType={screenerType} hideFooter>
        <SEO lang={lang} screenerType={screenerType} />
        <SkipNavContent>
          <Header
            title={
              school && school.value && school.value[localizedSchoolNameField]
                ? `${school.value[localizedSchoolNameField]} ${resultsSchool[lang].title}`
                : resultsSchool[lang].title
            }
            heading={`${resultsSchool[lang].approveHeading}`}
            icon={<HeadingCheckmark />}
            color={Green}
            titleColor={"#d1efd4"}
          />
          <ContentBlock lang={lang} icon={<IconDownload />}>
            <>
              <HyperlinkButton
                onClick={() =>
                  savePDF(ReactDOM.findDOMNode(elToPrintRef.current), {
                    paperSize: "auto",
                    avoidLinks: true,
                    margin: 40,
                    fileName: `COVID-19 School Screening Results${
                      school && school.value && school.value[localizedSchoolNameField]
                        ? "-" + school.value[localizedSchoolNameField]
                        : ""
                    }.pdf`,
                  })
                }
              >
                {resultsSchool[lang].downloadPDF}
              </HyperlinkButton>{" "}
            </>
          </ContentBlock>
          {children}
          {school && school.value && school.value[localizedSchoolNameField] && (
            <ContentBlock lang={lang} icon={<IconMapPin />} heading={`${resultsSchool[lang].approveSubHeading}`}>
              {school.value[localizedSchoolNameField]}
            </ContentBlock>
          )}
          <ContentBlock lang={lang} icon={<IconInfo />} heading={`${resultsSchool[lang].nextSteps}`}>
            <>
              {state.screenie && state.screenie === "guardian" ? (
                <>{resultsSchool[lang].nextStepsContentThem}</>
              ) : (
                <>{resultsSchool[lang].nextStepsContentYou}</>
              )}
            </>
          </ContentBlock>
          <ContentBlock lang={lang}>
            <p>
              <Hyperlink onClick={() => navigateHome(lang)}>{resultsSchool[lang].nextStepsLinkText}</Hyperlink>&nbsp;
              {resultsSchool[lang].nextStepsInstruction}
            </p>
          </ContentBlock>
          <ContentBlock lang={lang}>
            {state.screenie && state.screenie === "guardian" ? (
              <>{resultsSchool[lang].HealthAndSafetyTipsThem} </>
            ) : (
              <>{resultsSchool[lang].HealthAndSafetyTipsYou} </>
            )}
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
