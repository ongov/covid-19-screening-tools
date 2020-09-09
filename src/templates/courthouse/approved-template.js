import React, { useEffect, useRef, useContext } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"
import { savePDF } from "@progress/kendo-react-pdf"

import Layout from "../../components/layout"
import Header from "../../components/outcome-header"
import Footer from "../../components/outcome-footer"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import Callout from "../../components/callout-blue"
import SEO from "../../components/seo"

import { GlobalStateContext } from "../../context/global-context-provider"
import { results } from "../../localized_content"
import { pushOutcomeDataToGTM, navigateHome, getAddressPieces } from "../../shared"

import LargeCheckmark from "../../images/ontario-icon-checkmark-large.svg"
import SmallCheckmark from "../../images/ontario-icon-checkmark-small.svg"
import Information from "../../images/ontario-icon-information.svg"
import MapPin from "../../images/ontario-icon-map-pin.svg"
import StaySafe from "../../images/ontario-icon-stay-safe.svg"
import ContactTracing from "../../images/ontario-contact-tracing.svg"

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

const IconContactTracing = styled.span`
  background-image: url(${ContactTracing});
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

const screenerType = "courthouse"

export default ({ children, lang }) => {
  const elToPrintRef = useRef(null)
  const { courthouse } = useContext(GlobalStateContext)
  const { address, city, postalCode } = getAddressPieces(courthouse, lang)

  useEffect(() => {
    if (courthouse)
      pushOutcomeDataToGTM({
        pass: true,
        courthouse,
        lang,
      })
  }, [courthouse, lang])

  return (
    <span ref={elToPrintRef}>
      <Layout lang={lang} screenerType={screenerType} hideFooter>
        <SEO lang={lang} screenerType={screenerType} />
        <SkipNavContent>
          <Header
            title={`${courthouse && courthouse.court_name} ${results[lang].title}`}
            heading={`${results[lang].approveHeading}`}
            icon={<HeadingCheckmark />}
            color={Green}
            titleColor={"#d1efd4"}
          />
          {children}
          <ContentBlock lang={lang} icon={<IconMapPin />} heading={`${results[lang].approveSubHeading}`}>
            {courthouse && courthouse.court_name}
            <br />
            {address}
            <br />
            {city} Ontario
            <br />
            {postalCode}
          </ContentBlock>
          <ContentBlock lang={lang} icon={<IconInfo />} heading={`${results[lang].nextSteps}`}>
            <>
              <p>
                {results[lang].nextStepShowResults}{" "}
                <Hyperlink
                  onClick={() =>
                    savePDF(ReactDOM.findDOMNode(elToPrintRef.current), {
                      paperSize: "auto",
                      avoidLinks: true,
                      margin: 40,
                      fileName: `COVID-19 Courthouse Screening Results - ${courthouse.court_name}.pdf`,
                    })
                  }
                >
                  {results[lang].downloadPDF}
                </Hyperlink>{" "}
              </p>
              <p>{results[lang].nextStepShowResultsSecondary}</p>
            </>
          </ContentBlock>
          <Callout lang={lang} icon={<IconContactTracing />} heading={`${results[lang].contactTracingTitle}`}>
            <p>{results[lang].contactTracingContent}</p>
          </Callout>
          <ContentBlock lang={lang}>
            <p>
              <Hyperlink onClick={() => navigateHome(lang)}>{results[lang].nextStepsLinkText}</Hyperlink>&nbsp;
              {results[lang].nextStepsInstruction}
            </p>
          </ContentBlock>
          <ContentBlock lang={lang} icon={<IconStaySafe />} heading={`${results[lang].staySafe}`}>
            {results[lang].downloadApp}
            <p>
              <Hyperlink href={results[lang].downloadAppLink} target="_blank" rel="noopener">
                {results[lang].downloadAppLinkText}
              </Hyperlink>
            </p>
          </ContentBlock>
          <Footer icon={<FooterCheckmark />} color={Green} />
        </SkipNavContent>
      </Layout>
    </span>
  )
}
