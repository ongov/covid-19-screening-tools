import React from "react"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"

const OutcomeTemplate = ({ children, lang }) => (
  <Layout lang={lang} hideFooter isResultsPage>
    <SkipNavContent>{children}</SkipNavContent>
  </Layout>
)

export default OutcomeTemplate
