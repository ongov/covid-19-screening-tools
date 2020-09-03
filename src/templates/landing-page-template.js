import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"
import Select, { components } from "react-select"

import Layout from "../components/layout"
import Button from "../components/button"
import { GlobalDispatchContext } from "../context/global-context-provider"
import courthouses from "../data/courthouses.json"

import { questions } from "../shared"
import { general, landing, formatDate } from "../localized_content"

import dropDownArrow from "../images/ontario-dropdown-arrow.svg"

const DownChevron = styled.div`
  background: url(${dropDownArrow});
  background-size: 100%;
  width: 2rem;
  height: 2rem;
  position: relative;
  right: 0.2rem;
  top: -0.2rem;
`

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
  margin-bottom: 3rem;
  .ontario-input {
    margin-bottom: 1rem;
  }
  .dropdownError {
    border: 3px solid #cd0000;
  }
  &:focus {
    border: thin solid blue;
  }
`

const customStyles = {
  control: () => ({}),
  input: () => ({
    padding: "0",
  }),
  menu: () => ({
    backgroundColor: "white",
    marginTop: "1.8rem",
    border: "2px solid #1a1a1a",
    borderTop: "1px solid grey",
    position: "absolute",
    zIndex: "100",
    padding: "1rem 0",
  }),
  menuList: () => ({
    height: "150px",
    backgroundColor: "white",
    overflowY: "scroll",
  }),
  valueContainer: () => ({
    border: "2px solid #1a1a1a",
    borderRadius: "4px",
    boxSizing: "border-box",
    padding: ".625rem 1rem",
    maxWidth: "46em",
    lineHeight: "1.5",
    color: "#1a1a1a",
    fontSize: "1rem",
    fontFamily: '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif',
  }),
  indicatorsContainer: () => ({
    marginTop: "-2rem",
  }),
  indicatorSeparator: () => ({
    border: "none",
  }),
  dropdownIndicator: () => ({
    float: "right",
    width: "26px",
    position: "relative",
    right: "0.5rem",
    top: "-0.3rem",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 1
    const transition = "opacity 300ms"
    return { ...provided, opacity, transition }
  },
}

const DropDownIcon = () => {
  return <DownChevron />
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <DropDownIcon />
    </components.DropdownIndicator>
  )
}

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
                    styles={customStyles}
                    components={{ DropdownIndicator }}
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
