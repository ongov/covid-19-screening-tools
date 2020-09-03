import React, { useState, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import Button from "../components/button"
import AutocompleteDropdown from "../components/autocomplete-dropdown"
import { GlobalDispatchContext } from "../context/global-context-provider"
import schools from "../data/schools.json"
import schools_fr from "../data/schools_fr.json"

import { questions } from "../shared"
import { general, schoolLanding, formatDate, schoolDataFields } from "../localized_content"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;
  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const screenerType = "school"

const SchoolLandingPageTemplate = ({ lang }) => {
  const {
    currentBuildDate: { currentDate },
  } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  const localizedSchools = lang === "en" ? schools : schools_fr
  const localizedSchoolBoardFieldName = lang === "en" ? "Board Name" : schoolDataFields["Board Name"]
  const localizedNameFieldName = lang === "en" ? "School Name" : schoolDataFields["School Name"]
  const localizedSchoolBoards = Array.from(
    new Set(localizedSchools.map(school => school[localizedSchoolBoardFieldName]))
  )

  const [boardSelectError, setBoardSelectError] = useState(false)
  const [schoolSelectError, setSchoolSelectError] = useState(false)
  const [boardName, setBoardName] = useState("")
  const [schoolName, setSchoolName] = useState("")

  const dispatch = useContext(GlobalDispatchContext)

  const [screeningInfoStart, screeningInfoEnd] = schoolLanding[lang].screeningInfo.split(
    `[${schoolLanding[lang].linkText}]`
  )

  const handleClick = () => {
    if (!boardName) {
      setBoardSelectError(true)
      return
    }

    if (!schoolName) {
      setSchoolSelectError(true)
      return
    }

    dispatch({ type: "CS_START" })
    navigate(`${general[lang][screenerType].basePath}${questions.q8[lang]}`)
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
            <p className="ontario-lead-statement">{schoolLanding[lang].lead}</p>
            <p className="ontario-margin-top-32-!">{schoolLanding[lang].infoText}</p>
            <p className="ontario-margin-top-32-!">{schoolLanding[lang].additionalInfoText}</p>
            <p className="ontario-margin-top-32-!">
              {screeningInfoStart}
              <a href={schoolLanding[lang].link}>{schoolLanding[lang].linkText}</a>
              {screeningInfoEnd}
            </p>
            <AutocompleteDropdown
              selectOptions={localizedSchoolBoards}
              selectValue={[boardName]}
              selectId="boards"
              selectTitle="Select a school board"
              selectErrorMessage="Select a school board"
              getSelectOptionLabel={option => option}
              onSelectChange={value => setBoardName(value)}
            />
            {boardName && (
              <AutocompleteDropdown
                selectOptions={localizedSchools
                  .filter(school => school[localizedSchoolBoardFieldName] === boardName)
                  .map(school => school[localizedNameFieldName])}
                selectValue={[schoolName]}
                selectId="schools"
                selectTitle="Select a school"
                selectErrorMessage="Select a school"
                getSelectOptionLabel={option => option}
                onSelectChange={value => {
                  setSchoolName(value)
                  dispatch({
                    type: "SCHOOL_SELECTED",
                    school: value,
                  })
                }}
              />
            )}
            {/* <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
              <div className="ontario-small-12 ontario-medium-8 ontario-large-6 ontario-columns ontario-small-centered">
                <label className="ontario-label" htmlFor="courthouseSelect">
                  <StyledSelect>{schoolLanding[lang].boardSelect}</StyledSelect>
                </label>
                <StyledDropDown>
                  <StyledSelect
                    components={{ DropdownIndicator }}
                    styles={customStyles}
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
                </StyledDropDown>
                {courthouseSelectError && <ErrorDiv>{schoolLanding[lang].boardSelectError}</ErrorDiv>}
              </div>
            </div>
            <div className="ontario-row ontario-margin-top-32-! ontario-margin-bottom-0-!">
              <div className="ontario-small-12 ontario-medium-8 ontario-large-6 ontario-columns ontario-small-centered">
                <label className="ontario-label" htmlFor="courthouseSelect">
                  <StyledSelect>{schoolLanding[lang].schoolSelect}</StyledSelect>
                </label>
                <StyledDropDown>
                  <StyledSelect
                    components={{ DropdownIndicator }}
                    styles={customStyles}
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
                </StyledDropDown>
                {courthouseSelectError && <ErrorDiv>{schoolLanding[lang].schoolSelectError}</ErrorDiv>}
              </div>
            </div> */}
            <CenteredDiv>
              <Button text={schoolLanding[lang].button} clickHandler={handleClick} />
            </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}

export default SchoolLandingPageTemplate
