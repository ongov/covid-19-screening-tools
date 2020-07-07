import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import DeniedContactCard from "../components/denied-contact-card"
import ContentBlock from "../components/outcome-content-block-with-icon"
import SEO from "../components/seo";

import { pushOutcomeDataToGTM } from "../shared"

import CancelLarge from "../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../images/inline-svgs/ontario-icon-cancel-small.inline.svg"
import SpeechBubble from "../images/inline-svgs/ontario-icon-speech-bubble.inline.svg"
import { results } from "../localized_content"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: block;
  width: 120px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Red};
`

const Denied = ({ lang, children }) => {
  const { courthouse } = useContext(GlobalStateContext)

  useEffect(() => {
    if (!courthouse) return

    pushOutcomeDataToGTM({
      pass: false,
      courthouse,
      lang,
    })
  }, [])

  return (
    <Layout lang={lang} hideFooter>
      <SEO lang={lang} />

      <SkipNavContent>
        <Header
          title={
            <>{`${courthouse && courthouse[`court_name_display${lang === "fr" ? "_fr" : ""}`]} ${
              results[lang].title
            }`}</>
          }
          heading={`${results[lang].deniedHeading}`}
          icon={<HeadingDeniedIcon />}
          color={Red}
          titleColor={"#FFE0E2"}
        />
        {children}
        <ContentBlock lang={lang} icon={<SpeechBubble />} heading={`${results[lang].whoToContact}`}>
          <DeniedContactCard lang={lang} courthouse={courthouse} />
        </ContentBlock>
        <Footer icon={<CancelSmall />} color={Red} />
      </SkipNavContent>
    </Layout>
  )
}

export default Denied
