import { navigate } from "@reach/router"
import { general } from "../localized_content"
import { questions } from "../shared"

const navigateHome = (lang, screenerType) =>
  navigate(general[lang][screenerType].basePath, {
    replace: true,
  })

export { navigateHome }
