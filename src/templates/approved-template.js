import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"
import { addDays, differenceInMilliseconds } from "date-fns"

import { savePDF } from "@progress/kendo-react-pdf"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"

import { results } from "../localized_content"

import LargeCheckmark from "../images/inline-svgs/ontario-icon-checkmark-large.inline.svg"
import SmallCheckmark from "../images/inline-svgs/ontario-icon-checkmark-small.inline.svg"
import Information from "../images/inline-svgs/ontario-icon-information.inline.svg"
import MapPin from "../images/inline-svgs/ontario-icon-map-pin.inline.svg"
import StaySafe from "../images/inline-svgs/ontario-icon-stay-safe.inline.svg"

import { pushOutcomeDataToGTM, navigateHome, navigateToExpired, getAddressPieces, useCourthouse } from "../shared"

const Green = "#118847"

const HeadingCheckmark = styled(LargeCheckmark)`
  display: block;
  width: 143px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Green};
`
const Hyperlink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`

function redirectToExpiredAtMidnight(lang) {
  const current = new Date()
  const oneMore = addDays(new Date(current.toLocaleDateString()), 1)

  setTimeout(() => {
    navigateToExpired(lang)
  }, differenceInMilliseconds(oneMore, current))
}

const Approved = ({ children, lang }) => {
  const elToPrintRef = useRef(null)
  const courthouse = useCourthouse(lang)
  const { address, city, postalCode } = getAddressPieces(courthouse, lang)

  useEffect(() => {
    redirectToExpiredAtMidnight(lang)

    if (courthouse && !courthouse.reload)
      pushOutcomeDataToGTM({
        pass: true,
        courthouse,
        lang,
      })
  }, [courthouse, lang])

  return (
    <span ref={elToPrintRef}>
      <Layout lang={lang} hideFooter>
        <SkipNavContent>
          <Header
            title={`${courthouse && courthouse.court_name} ${results[lang].title}`}
            heading={`${results[lang].approveHeading}`}
            icon={<HeadingCheckmark />}
            color={Green}
            titleColor={"#d1efd4"}
          />
          {children}
          <ContentBlock lang={lang} icon={<MapPin />} heading={`${results[lang].approveHeading}`}>
            {courthouse && courthouse.court_name}
            <br />
            {address}
            <br />
            {city} Ontario
            <br />
            {postalCode}
          </ContentBlock>
          <ContentBlock lang={lang} icon={<Information />} heading={`${results[lang].nextSteps}`}>
            <>
              <p>
                {results[lang].nextStepShowResults}{" "}
                <Hyperlink
                  onClick={() =>
                    savePDF(ReactDOM.findDOMNode(elToPrintRef.current), {
                      paperSize: "auto",
                      avoidLinks: true,
                      margin: 40,
                      fileName: `COVID-19 Courthouse Screening Results - ${courthouse.court_name}`,
                    })
                  }
                >
                  {results[lang].downloadPDF}
                </Hyperlink>{" "}
              </p>
              <p>
                <Hyperlink onClick={() => navigateHome(lang)}>{results[lang].nextStepsLinkText}</Hyperlink>&nbsp;
                {results[lang].nextStepsInstruction}
              </p>
            </>
          </ContentBlock>
          {/* NOTE: To enable contact tracing app link, uncomment the below code section. */}
          {/* <ContentBlock lang={lang} icon={<StaySafe />} heading={`${results[lang].staySafe}`}>
            {results[lang].downloadApp}
          </ContentBlock> */}
          <Footer icon={<SmallCheckmark />} color={Green} />
        </SkipNavContent>
      </Layout>
    </span>
  )
}

export default Approved
