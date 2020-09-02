import React, { useState, useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"
import Select from "react-select"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import CalloutInfo from "../components/callout-info"
import { GlobalDispatchContext } from "../context/global-context-provider"
import courthouses from "../data/courthouses.json"

import { questions } from "../shared"
import { general, landing, formatDate } from "../localized_content"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;

  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const ErrorDiv = styled.div`
  background-color: #ffecee;
  border-left: 4px solid #cd0000;
  color: #cd0000;
  padding: 1rem;
  position: relative;
  margin-bottom: 1.5rem;
`

const CourtHouseSelect = styled.span`
  color: #1a1a1a;
  font-family: "Raleway", "Open Sans", Arial, sans-serif;
  font-size: 1.1875rem;
  font-weight: 700;
  letter-spacing: 0.025rem;
  line-height: 1.56;
`

const CourtHouseDropDown = styled.div`
  margin-bottom: 1.5625rem;
  .ontario-input {
    margin-bottom: 1rem;
  }
  .dropdownError {
    border: 3px solid #cd0000;
  }
`

const LandingPageTemplate = ({ lang, screenerType }) => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const [courthouseSelectError, setCourthouseSelectError] = useState(false)
  const [courthouseName, setCourthouseName] = useState("")
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    if (!courthouseName) {
      setCourthouseSelectError(true)
      return
    }

    dispatch({ type: "CS_START" })
    navigate(`${general[lang][screenerType].basePath}${questions.q1[lang]}`)
  }

  return (
    <Layout lang={lang} screenerType={screenerType}>
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
            <p className="ontario-margin-bottom-12-!">
              <strong>{`${general[lang].lastUpdated} ${formatDate(new Date(Date.parse(currentDate)), lang)}`}</strong>
            </p>
            <h1>{general[lang][screenerType].title}</h1>
            <p className="ontario-lead-statement">{landing[lang].lead}</p>
            <p className="ontario-margin-top-32-!">{landing[lang].infoText}</p>
            <p className="ontario-margin-top-32-!">
              {landing[lang].screeningInfo} <a href={landing[lang].link}>{landing[lang].linkText}</a>.
            </p>
            <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
              <div className="ontario-small-12 ontario-medium-8 ontario-large-6 ontario-columns ontario-small-centered">
                <label className="ontario-label" htmlFor="courthouseSelect">
                  <CourtHouseSelect>{landing[lang].courthouseSelect}</CourtHouseSelect>
                </label>
                <CourtHouseDropDown>
                  <Select
                    id="courthouseSelect"
                    options={courthouses}
                    getOptionLabel={option =>
                      `${lang === "fr" ? option.court_name_display_fr : option.court_name_display}`
                    }
                    onChange={e => {
                      let nameDisplayField = `court_name_display${lang === "fr" ? "_fr" : ""}`
                      setCourthouseName(lang === "fr" ? e.court_name_display_fr : e.court_name_display)
                      setCourthouseSelectError(false)
                      dispatch({
                        type: "COURTHOUSE_SELECTED",
                        courthouse: {
                          ...courthouses.find(ch =>
                            lang === "fr"
                              ? ch[nameDisplayField] === e.court_name_display_fr
                              : ch[nameDisplayField] === e.court_name_display
                          ),
                        },
                      })
                    }}
                  />
                </CourtHouseDropDown>
                {courthouseSelectError && <ErrorDiv>{landing[lang].courthouseSelectError}</ErrorDiv>}
              </div>
            </div>
            <CenteredDiv>
              <Button text={landing[lang].button} clickHandler={handleClick} />
            </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default LandingPageTemplate
