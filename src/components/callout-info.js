import React from "react"
import "../stylesheets/callouts.css"

const CalloutInfo = ({ icon, classnameTitle, title, classnameMessage, message }) => (
  <div className="ontario-row">
    <div className="ontario-small-12 ontario-columns">
      <div className="ontario-callout ontario-callout--info ontario-margin-top-0-! ontario-margin-bottom-24-!">
        <div className="ontario-row">
          <div className="ontario-small-1 ontario-columns ontario-text-center ontario-hide-for-print">
            <div className={icon}></div>
          </div>
          <div className="ontario-small-10 ontario-end ontario-columns">
              <div className={classnameTitle}>{title}</div>
          </div>
          <div className="ontario-small-12 ontario-columns">
              <span className={classnameMessage}>{message}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default CalloutInfo
