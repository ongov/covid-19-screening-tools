import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"
import { format } from "date-fns"
import en from "date-fns/locale/en-CA"
import fr from "date-fns/locale/fr-CA"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import CalloutNoBg from "../components/callout-no-bg"
import { GlobalDispatchContext } from "../context/global-context-provider"
import courthouses from "../data/courthouses.json"

import { general } from "../localized_content"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;

  button {
    display: block;
    margin: 0 auto 1.75rem;
  }
`

const LandingPageTemplate = ({ lang }) => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const [courthouse, setCourthouse] = useState(null)
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "CS_START" })
    navigate("/courthouse-screening/travel")
  }

  return (
    <Layout lang={lang}>
      <SEO lang={lang} />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              {general[lang].breadcrumbs &&
                general[lang].breadcrumbs.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>{item.text}</a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
              <h1>{general[lang].title}</h1>
              <CalloutNoBg
                message={
                  <p>
                    <strong>{`${general[lang].lastUpdated} ${format(new Date(Date.parse(currentDate)), "MMMM dd, yyyy", {
                      locale: lang === "fr" ? fr : en,
                    })}`}</strong>
                  </p>
                }
              />
              <p className="ontario-lead-statement">Answer the following questions before you enter an Ontario courthouse.</p>
              <p className="ontario-margin-top-32-!">Your result will tell you if you can or cannot enter.</p>
              <p>If you are told you cannot enter, you will get information about what to do next.</p>
              <p className="ontario-margin-top-32-!">
                This screening is only meant for entering Ontario courthouses and cannot diagnose you. If you have medical
                questions, consult a health care provider or your{" "}
                <a href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx">
                  local public health unit
                </a>
                .
              </p>
              <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
                <div className="ontario-small-12 ontario-medium-6 ontario-large-6 ontario-columns ontario-small-centered">
                  <label className="ontario-label" htmlFor="courthouseSelect">
                    Select the courthouse you wish to enter.
                  </label>
                  <select
                    className="ontario-input ontario-dropdown"
                    id="courthouseSelect"
                    onChange={e => {
                      let nameDisplayField = `court_name_display${lang === "fr" ? "_fr" : ""}`
                      setCourthouse(e.target.value)
                      dispatch({
                        type: "COURTHOUSE_SELECTED",
                        courthouse: { ...courthouses.find(ch => ch[nameDisplayField] === e.target.value) },
                      })
                    }}
                    value={courthouse}
                  >
                    <option disabled selected value></option>
                    {courthouses &&
                      courthouses.map((ch, i) => (
                        <option
                          key={`${ch.court_name}-${i}`}
                          value={lang === "fr" ? ch.court_name_display_fr : ch.court_name_display}
                        >
                          {lang === "fr" ? ch.court_name_display_fr : ch.court_name_display}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <CenteredDiv>
                <Button text="Start courthouse assessment" clickHandler={handleClick} isDisabled={!courthouse} />
              </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default LandingPageTemplate
