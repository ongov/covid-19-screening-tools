import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"
import styled from "styled-components"

import Layout from "../../components/layout"
import Button from "../../components/button"
import AutocompleteDropdown from "../../components/autocomplete-dropdown"

import { GlobalDispatchContext, GlobalStateContext } from "../../context/global-context-provider"
import { questions } from "../../shared"
import { general, landing, formatDate } from "../../localized_content"

import courthouses from "../../data/courthouses.json"

const CenteredDiv = styled.div`
  display: block;
  margin: 0 auto;
  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const screenerType = "courthouse"

export default ({ lang }) => {
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
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const handleClick = () => {
    if (!state.courthouse) {
      setCourthouseSelectError(true)
      return
    }

    dispatch({ type: "CS_START", screener_type: "courthouse", language: lang })
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
            <AutocompleteDropdown
              selectId="courthouseSelect"
              selectOptions={courthouses.map(ch => ({
                label: ch[`court_name_display${lang === "fr" ? "_fr" : ""}`],
                value: ch,
              }))}
              getOptionLabel={option => option.label}
              onSelectChange={option => {
                setCourthouseSelectError(false)
                dispatch({
                  type: "COURTHOUSE_SELECTED",
                  courthouse: {
                    ...courthouses.find(ch => ch[`court_name_display${lang === "fr" ? "_fr" : ""}`] === option.label),
                  },
                })
              }}
              selectValue={
                (state.courthouse && {
                  label: state.courthouse[`court_name_display${lang === "fr" ? "_fr" : ""}`],
                  value: state.courthouse,
                }) ||
                null
              }
              selectTitle={landing[lang].courthouseSelect}
              selectError={courthouseSelectError}
              selectErrorMessage={landing[lang].courthouseSelectError}
              placeholerText={landing[lang].placeholderText}
              noOptionsText={landing[lang].noOptionsText}
            />
            <CenteredDiv>
              <Button text={landing[lang].button} clickHandler={handleClick} />
            </CenteredDiv>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}
