import React, { useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"

import results from "../localized_content"

import LargeCheckmark from "../images/inline-svgs/ontario-icon-checkmark-large.inline.svg"
import SmallCheckmark from "../images/inline-svgs/ontario-icon-checkmark-small.inline.svg"

import { pushOutcomeDataToGTM } from "../shared"

const Green = "#118847"

const HeadingCheckmark = styled(LargeCheckmark)`
  display: inline-block;
  margin: 2rem calc(50% - (143px / 2));
  background-color: ${Green};
`

const Hyperlink = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`

const Approved = ({ children, lang }) => {
  const elToPrintRef = useRef(null)
  const { courthouse } = useContext(GlobalStateContext)

  useEffect(() => {
    if (!courthouse) return

    pushOutcomeDataToGTM({
      pass: true,
      courthouse,
      lang,
    })
  }, [])

  return (
    <span ref={elToPrintRef}>
      <Layout lang={lang} hideFooter>
        <SkipNavContent>
          <Header
            title={<>{courthouse && courthouse.court_name} COVID-19 screening result</>}
            heading={"You can enter"}
            icon={<HeadingCheckmark />}
            color={Green}
            titleColor={"#d1efd4"}
          />
          {children}
          <Footer icon={<SmallCheckmark />} color={Green} />
        </SkipNavContent>
      </Layout>
    </span>
  )
}

export default Approved
