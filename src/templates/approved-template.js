import React, { useContext, useEffect, forwardRef } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import ContentBlock from "../components/outcome-content-block-with-icon"

import { results } from "../localized_content"

import LargeCheckmark from "../images/inline-svgs/ontario-icon-checkmark-large.inline.svg"
import SmallCheckmark from "../images/inline-svgs/ontario-icon-checkmark-small.inline.svg"
import StaySafe from "../images/inline-svgs/ontario-icon-stay-safe.inline.svg"

import { pushOutcomeDataToGTM } from "../shared"

const Green = "#118847"

const HeadingCheckmark = styled(LargeCheckmark)`
  display: block;
  width: 143px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Green};
`

const Approved = forwardRef(({ children, lang }, ref) => {
  const { courthouse } = useContext(GlobalStateContext)

  useEffect(() => {
    pushOutcomeDataToGTM({
      pass: true,
      courthouse,
      lang,
    })
  }, [courthouse, lang])

  return (
    <span ref={ref}>
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
          {/* NOTE: To enable contact tracing app link, uncomment the below code section. */}
          {/* <ContentBlock lang={lang} icon={<StaySafe />} heading={`${results[lang].staySafe}`}>
            {results[lang].downloadApp}
          </ContentBlock> */}
          <Footer icon={<SmallCheckmark />} color={Green} />
        </SkipNavContent>
      </Layout>
    </span>
  )
})

export default Approved
