import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../../components/layout"
import Header from "../../components/outcome-header"
import Footer from "../../components/outcome-footer"
import DeniedContactCard from "../../components/denied-contact-card"
import ContentBlock from "../../components/outcome-content-block-with-icon"
import CalloutBlueBorder from "../../components/callout-blue-border"
import SEO from "../../components/seo"

import { pushOutcomeDataToGTM } from "../../shared"
import { GlobalStateContext } from "../../context/global-context-provider"

import CancelLarge from "../../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../../images/inline-svgs/ontario-icon-cancel-small.inline.svg"
import SpeechBubble from "../../images/inline-svgs/ontario-icon-speech-bubble.inline.svg"
import { results } from "../../localized_content"
import InfoIcon from "../../images/ontario-icon-information_blue.svg"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: block;
  width: 120px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Red};
`

const IconInfo = styled.span`
  background-image: url(${InfoIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.35rem;
  margin-top: -0.25rem;
`
const screenerType = "courthouse"

export default ({ lang, children }) => {
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
    <Layout lang={lang} screenerType={screenerType} hideFooter>
      <SEO lang={lang} screenerType={screenerType} />
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
        <ContentBlock lang={lang} icon={<SpeechBubble />} heading={`${results[lang].whoToContact}`}></ContentBlock>
        <CalloutBlueBorder lang={lang} icon={<IconInfo />}>
          {results[lang].whoToContactSubText}
        </CalloutBlueBorder>
        <ContentBlock lang={lang}>
          <DeniedContactCard lang={lang} courthouse={courthouse} />
        </ContentBlock>
        <Footer icon={<CancelSmall />} color={Red} />
      </SkipNavContent>
    </Layout>
  )
}
