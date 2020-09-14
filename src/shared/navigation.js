import { navigate } from "@reach/router"
import { general } from "../localized_content"

const navigateHome = (lang, screenerType) =>
  navigate(general[lang][screenerType].basePath, {
    replace: true,
  })

export { navigateHome }
