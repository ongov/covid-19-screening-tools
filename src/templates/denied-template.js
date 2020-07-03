import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { SkipNavContent } from "@reach/skip-nav"

import { GlobalStateContext } from "../context/global-context-provider"

import Layout from "../components/layout"
import Header from "../components/outcome-header"
import Footer from "../components/outcome-footer"
import { pushOutcomeDataToGTM } from "../shared"

import CancelLarge from "../images/inline-svgs/ontario-icon-cancel-large.inline.svg"
import CancelSmall from "../images/inline-svgs/ontario-icon-cancel-small.inline.svg"

const Red = "#D81A21"

const HeadingDeniedIcon = styled(CancelLarge)`
  display: inline-block;
  margin: 2rem calc(50% - (120px / 2));
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
      <SkipNavContent>
        <Header
          title={
            <>{courthouse && courthouse[`court_name_display${lang === "fr" ? "_fr" : ""}`]} COVID-19 screening result</>
          }
          heading={"You cannot enter"}
          icon={<HeadingDeniedIcon />}
          color={Red}
          titleColor={"#FFE0E2"}
        />
        {children}
        <Footer icon={<CancelSmall />} color={Red} />
      </SkipNavContent>
    </Layout>
  )
}

export default Denied
