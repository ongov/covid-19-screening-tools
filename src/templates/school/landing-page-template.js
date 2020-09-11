import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"
import { SkipNavContent } from "@reach/skip-nav"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import Button from "../../components/button"

import { GlobalDispatchContext } from "../../context/global-context-provider"
import { questions } from "../../shared"
import { general, schoolLanding, formatDate } from "../../localized_content"

const StartScreeningCtaContainer = styled.div`
  display: block;
  margin: 4rem auto 5rem;
  button {
    display: block;
    margin: 1rem auto 1.75rem;
  }
`

const screenerType = "school"

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

  const dispatch = useContext(GlobalDispatchContext)

  const [screeningInfoStart, screeningInfoEnd] = schoolLanding[lang].screeningInfo.split(
    `[${schoolLanding[lang].linkText}]`
  )

  const handleClick = () => {
    dispatch({ type: "CS_START", screener_type: "school", language: lang })
    navigate(`${general[lang][screenerType].basePath}${questions.q8[lang]}`)
  }

  return (
    <Layout lang={lang} screenerType={screenerType}>
      <SEO lang={lang} screenerType="school" />
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
            <p className="ontario-lead-statement">{schoolLanding[lang].optionalText}</p>
            <p className="ontario-margin-top-32-!">
              {screeningInfoStart}
              <a href={schoolLanding[lang].link} target="_blank" rel="noopener">
                {schoolLanding[lang].linkText}
              </a>
              {screeningInfoEnd}
            </p>

            <StartScreeningCtaContainer>
              <Button tabOrder="4" text={schoolLanding[lang].button} clickHandler={handleClick} />
            </StartScreeningCtaContainer>
          </div>
        </div>
      </SkipNavContent>
    </Layout>
  )
}
