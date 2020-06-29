import React, { useContext, useState } from "react"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Button from "../../components/button"
import CalloutNoBg from "../../components/callout-no-bg"
import { GlobalDispatchContext } from "../../context/global-context-provider"
import courthouses from "../../data/courthouses.json"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "SAT_START" })
    navigate("/self-assessment/severe-symptoms")
  }

  function getCourthouseName(courthouse) {
    return courthouse.court_name.toLowerCase().includes(courthouse.municipality.toLowerCase())
      ? courthouse.court_name
      : `${courthouse.municipality} - ${courthouse.court_name}`
  }

  return (
    <Layout lang="en">
      <SEO lang="en" />
      <nav role="navigation">
        <div className="ontario-row">
          <div className="ontario-small-12 ontario-columns">
            <ul className="ontario-breadcrumbs">
              <li>
                <a href="https://www.ontario.ca/page/government-ontario">Home</a>
              </li>
              <li>
                <a href="https://www.ontario.ca/page/health-care-ontario">Health and wellness</a>
              </li>
              <li>
                <a href="https://covid-19.ontario.ca/">COVID-19</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SkipNavContent>
        <h1>COVID-19 courthouse screening</h1>
        {/* <CalloutNoBg
          message={
            <>
              <p>
                <strong>
                  Version 1.0
                  <br />
                  Last updated: July 6, 2020
                </strong>
              </p>
            </>
          }
        /> */}
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
            <select className="ontario-input ontario-dropdown" id="courthouseSelect">
              <option disabled selected value></option>
              {courthouses &&
                courthouses.map((ch, i) => (
                  <option key={`${ch.court_name}-${i}`} value={ch.court_name}>
                    {getCourthouseName(ch)}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="ontario-text-center ontario-landing__button">
          <Button text="Start courthouse assessment" clickHandler={handleClick} />
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default IndexPage
