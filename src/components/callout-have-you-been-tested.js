import React from "react"
import { labResults } from "../localized_content"
import "../stylesheets/callouts.css"

const CalloutTested = ({ lang }) => (
  <div className="ontario-row">
    <div className="ontario-small-12 ontario-columns">
      <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-padding-top-32-! ontario-padding-left-0-!">
        <div className="ontario-row">
          <div className="ontario-small-2 ontario-medium-1 ontario-columns ontario-text-center ontario-hide-for-print">
            <div className="ontario-icon__thermometer"></div>
          </div>
          <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
            <h2 className="ontario-callout--feedback__title ontario-margin-bottom-16-!">{labResults[lang].title}</h2>
            <p>{labResults[lang].content}</p>
            <p><a href={labResults[lang].link} rel="noopener" target="_blank">{labResults[lang].linkText}</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CalloutTested
