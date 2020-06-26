import React, { forwardRef } from "react"
import { savePDF } from "@progress/kendo-react-pdf"
import ReactDOM from "react-dom"

import { general } from "../localized_content"

const SaveToPDFButton = forwardRef(({ lang }, ref) => (
  <>
    <button
      className="ontario-button ontario-button--secondary"
      onClick={() =>
        savePDF(ReactDOM.findDOMNode(ref.current), {
          paperSize: "auto",
          margin: 40,
          fileName: "COVID-19 Self-Assessment Test Results",
        })
      }
    >
      {general[lang].savePDF} <span className="ontario-icon__download"></span>
    </button>
  </>
))

export default SaveToPDFButton
