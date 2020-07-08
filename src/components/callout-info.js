import React from "react"
import "../stylesheets/callouts.css"

const CalloutInfo = ({ message }) => (
  <div className="ontario-row">
    <div className="ontario-small-12 ontario-columns">
      <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-margin-bottom-24-!">
        <div className="ontario-row">
          <div className="ontario-small-1 ontario-large-1 ontario-columns ontario-text-center ontario-hide-for-print">
            <div className="ontario-icon__info"></div>
          </div>
          <div className="ontario-small-10 ontario-large-11 ontario-end ontario-columns">
            <p className="ontario-callout__icon-info"><strong>{message}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default CalloutInfo
