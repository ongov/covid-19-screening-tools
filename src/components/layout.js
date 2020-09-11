import React, { useContext, useEffect } from "react"
import { GlobalStateContext } from "../context/global-context-provider"
import { SkipNavLink } from "@reach/skip-nav"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import { general } from "../localized_content"
import { navigateHome } from "../shared"
import "../stylesheets/theme.css"
import "../stylesheets/sat-style.css"
import "../stylesheets/print.css"

export default ({ lang, screenerType, hideFooter, isResultsPage, altHeaderLink, children }) => {
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (
      process.env.GATSBY_IS_PROD_ENV &&
      !state.in_progress &&
      window.location.pathname !== general[lang][screenerType].basePath
    ) {
      navigateHome(lang, screenerType)
    }
  }, [])

  return (
    <>
      <SEO lang={lang} screenerType={screenerType} />
      <div className="ontario-text-center ontario-hide-for-print">
        <SkipNavLink>{general[lang].skipNavText}</SkipNavLink>
      </div>
      <Header lang={lang} link={altHeaderLink} screenerType={screenerType} />
      <main id="main-content">{isResultsPage ? children : <>{children}</>}</main>
      {!hideFooter && <Footer lang={lang} />}
    </>
  )
}
