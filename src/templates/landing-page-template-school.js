import React, { useState, useContext } from "react"
import { components } from "react-select"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import Layout from "../components/layout"
import Button from "../components/button"
import Checkbox from "../components/checkbox"
import AutocompleteDropdown from "../components/autocomplete-dropdown"
import { GlobalDispatchContext, GlobalStateContext } from "../context/global-context-provider"
import schools from "../data/schools.json"
import schools_fr from "../data/schools_fr.json"

import { questions, replaceSchoolBoardAcronyms } from "../shared"
import { general, schoolLanding, formatDate, getLocalizedSchoolDataField } from "../localized_content"

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

  const localizedSchoolBoards = Array.from(
    new Set(localizedSchools.map(school => school[getLocalizedSchoolDataField(lang, "Board Name")]))
  ).map(item => ({ label: replaceSchoolBoardAcronyms(item), value: item }))

  const [schoolBoard, setSchoolBoard] = useState()
  const [notFound, setNotFound] = useState(false)
  const [boardSelectError, setBoardSelectError] = useState()
  const [schoolSelectError, setSchoolSelectError] = useState()

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const SchoolOptions = props => (
    <components.Option {...props}>
      <span>
        <strong>{props.label}</strong>
      </span>
      <br />
      <span>{props.value[getLocalizedSchoolDataField(lang, "Street")]}</span>
    </components.Option>
  )

  const [screeningInfoStart, screeningInfoEnd] = schoolLanding[lang].screeningInfo.split(
    `[${schoolLanding[lang].linkText}]`
  )

  const handleClick = () => {
    if (!schoolBoard && !notFound) {
      setBoardSelectError(true)
      return
    }

    if (!state.school && !notFound) {
      setSchoolSelectError(true)
      return
    }

    dispatch({ type: "CS_START", screener_type: "school", language: lang })
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
            <p className="ontario-lead-statement">{schoolLanding[lang].infoText}</p>
            <p className="ontario-lead-statement">{schoolLanding[lang].additionalInfoText}</p>
            <p className="ontario-margin-top-32-!">
              {screeningInfoStart}
              <a href={schoolLanding[lang].link} target="_blank" rel="noopener">
                {schoolLanding[lang].linkText}
              </a>
              {screeningInfoEnd}
            </p>
            <AutocompleteDropdown
              selectOptions={localizedSchoolBoards}
              selectValue={schoolBoard}
              selectId="boards"
              selectTitle={schoolLanding[lang].boardSelect}
              onSelectChange={option => {
                setBoardSelectError(false)
                setSchoolBoard(option)
                dispatch({
                  type: "SCHOOL_SELECTED",
                  school: null,
                })
              }}
              selectError={boardSelectError}
              selectErrorMessage={schoolLanding[lang].boardSelectError}
              placeholerText={schoolLanding[lang].placeholderText}
              noOptionsText={schoolLanding[lang].noOptionsText}
            />
            {schoolBoard && (
              <AutocompleteDropdown
                selectOptions={localizedSchools
                  .filter(school => school[getLocalizedSchoolDataField(lang, "Board Name")] === schoolBoard.value)
                  .map(school => ({
                    label: `${school[getLocalizedSchoolDataField(lang, "School Name")]} - ${
                      school[getLocalizedSchoolDataField(lang, "City")]
                    }`,
                    value: school,
                  }))}
                selectValue={state.school}
                selectId="schools"
                selectTitle={schoolLanding[lang].schoolSelect}
                selectOptionComponent={SchoolOptions}
                onSelectChange={option => {
                  setSchoolSelectError(false)
                  dispatch({
                    type: "SCHOOL_SELECTED",
                    school: option,
                  })
                  setNotFound(false)
                }}
                selectError={schoolSelectError}
                selectErrorMessage={schoolLanding[lang].schoolSelectError}
                placeholerText={schoolLanding[lang].placeholderText}
                noOptionsText={schoolLanding[lang].noOptionsText}
              />
            )}
            <div className="ontario-checkboxes__not-found-container">
              <Checkbox
                id="not-found"
                value={notFound}
                checkboxState={notFound}
                text={schoolLanding[lang].cantFindSchoolLabel}
                labelStyle="--large"
                checkboxOnChange={e => {
                  if (!e.target.checked) {
                    setNotFound(false)
                    return
                  }

                  setBoardSelectError(false)
                  setSchoolSelectError(false)
                  setNotFound(true)
                  setSchoolBoard("")
                  dispatch({
                    type: "SCHOOL_SELECTED",
                    school: null,
                  })
                }}
              />
            </div>
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
