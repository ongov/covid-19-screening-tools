import { navigate } from "@reach/router"
import { general } from "../localized_content"

export default lang =>
  navigate(general[lang].basePath, {
    replace: true,
  })
