import React from "react"
import { navigate } from "@reach/router"

import Button from "./button"
import { general } from "../localized_content"

const YesNoButtons = ({ lang, noLink, yesLink }) => (
  <div className="ontario-form__button-wrapper ontario-text-center">
    <Button text={general[lang].no} clickHandler={() => navigate(noLink)} />
    <Button text={general[lang].yes} clickHandler={() => navigate(yesLink)} />
  </div>
)

export default YesNoButtons
