import { navigate } from "@reach/router"
import { general } from "../localized_content"
import { questions } from "../shared"

const navigateHome = lang =>
  navigate(general[lang].basePath, {
    replace: true,
  })

const navigateToExpired = lang =>
  navigate(`${general[lang].basePath}${questions.r3[lang]}`, {
    replace: true,
  })

export { navigateHome, navigateToExpired }
