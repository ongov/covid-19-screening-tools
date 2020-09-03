import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import DeniedContactCard from "../components/denied-contact-card"
import ContentBlock from "../components/outcome-content-block-with-icon"
import CalloutBlueBorder from "../components/callout-blue-border"
import SEO from "../components/seo"

import { pushOutcomeDataToGTM } from "../shared"

import CancelLarge from "../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../images/inline-svgs/ontario-icon-cancel-small.inline.svg"
import SpeechBubble from "../images/inline-svgs/ontario-icon-speech-bubble.inline.svg"
import {feedback, results} from "../localized_content"
import Callout from "../components/callout-blue";
import FeedbackIcon from "../images/ontario-icon-feedback.svg";
import InfoIcon from "../images/ontario-icon-information_blue.svg"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: block;
  width: 120px;
  margin: 1.2rem auto 2rem auto;
  background-color: ${Red};
`

const IconInfo = styled.span `
  background-image: url(${InfoIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.35rem;
  margin-top: -0.25rem;
`

const IconFeedback = styled.span `
  background-image: url(${FeedbackIcon});
  background-size: 100%;
  display: inline-block;
  width: 2.35rem;
  height: 2.10rem;
`

const Denied = ({ lang, children }) => {
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
    <Layout lang={lang} screenerType="school" hideFooter>
      <SEO lang={lang} />

      <SkipNavContent>
        <Header
          title={<>{`${school} ${results[lang].title}`}</>}
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
        {/* <ContentBlock lang={lang}>
          <DeniedContactCard lang={lang} courthouse={courthouse} />
        </ContentBlock> */}
        <Callout lang={lang} icon={<IconFeedback />} heading={`${feedback[lang].title}`}>
          <a href={feedback[lang].link} rel="noopener" target="_blank">{feedback[lang].content}</a>
        </Callout>
        <Footer icon={<CancelSmall />} color={Red} />
      </SkipNavContent>
    </Layout>
  )
}

export default Denied
