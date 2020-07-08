import React, { useContext, useEffect } from "react"
import { GlobalStateContext } from "../context/global-context-provider"
import { SkipNavLink } from "@reach/skip-nav"
import { useCookies } from "react-cookie"
import isToday from "date-fns/isToday"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"
import { general } from "../localized_content"
import { navigateHome, questions, cookieName } from "../shared"
import "../stylesheets/theme.css"
import "../stylesheets/sat-style.css"
import "../stylesheets/print.css"

const Layout = ({ lang, hideFooter, isResultsPage, altHeaderLink, children }) => {
  const state = useContext(GlobalStateContext)
  const [cookies] = useCookies()

  useEffect(() => {
    if (
      window &&
      window.location &&
      window.location.pathname === `${general[lang].basePath}${questions.r1[lang]}` &&
      cookies[cookieName] &&
      isToday(new Date(cookies[cookieName].time))
    ) {
      return
    }

    if (process.env.GATSBY_IS_PROD_ENV && !state.in_progress) {
      navigateHome(lang)
    }
  }, [])

  return (
    <>
      <SEO lang={lang} />
      <div className="ontario-text-center ontario-hide-for-print">
        <SkipNavLink>{general[lang].skipNavText}</SkipNavLink>
      </div>
      <Header lang={lang} link={altHeaderLink} />
      <main id="main-content">{isResultsPage ? children : <>{children}</>}</main>
      {!hideFooter && <Footer lang={lang} />}
    </>
  )
}

export default Layout
