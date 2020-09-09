import React from "react"

import Button from "./button"
import { general } from "../localized_content"

export default ({ lang, clickHandler, isDisabled }) => (
  <div className="ontario-form__button-wrapper ontario-text-center">
    <Button text={general[lang].skipButtonText} clickHandler={clickHandler} isDisabled={isDisabled} />
  </div>
)
