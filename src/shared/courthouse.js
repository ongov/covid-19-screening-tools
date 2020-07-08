import { useState, useEffect, useContext } from "react"
import { useCookies } from "react-cookie"
import { navigate } from "@reach/router"
import isToday from "date-fns/isToday"
import { GlobalStateContext } from "../context/global-context-provider"
import { general } from "../localized_content"
import { questions } from "../shared"

const cookieName = "_cs"

function useCourthouse(lang) {
  const [courthouse, setCourthouse] = useState(null)
  const [cookies, setCookie] = useCookies([cookieName])
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (state && state.courthouse) {
      setCookie(
        cookieName,
        { courthouse: state.courthouse, lang, time: new Date().toLocaleString() },
        { path: "/", domain: window && window.location && window.location.hostname }
      )
      setCourthouse(state.courthouse)
    } else if (cookies[cookieName] && cookies[cookieName].courthouse) {
      // This reload property is being added to the context courthouse
      // that is used by the approved page. Reason for this is that we
      // only want to dispatch data to Google Analytics on initial load.
      // So we check for the presence of this before pushing data to GA.
      cookies[cookieName].courthouse.reload = true
      setCourthouse(cookies[cookieName].courthouse)
    }
  }, [state])

  //   useEffect(() => {
  //     if (
  //       cookies[cookieName] &&
  //       cookies[cookieName].lang === lang &&
  //       cookies[cookieName].courthouse &&
  //       !isToday(new Date(cookies[cookieName].time))
  //     ) {
  //       navigate(`${general[lang].basePath}${questions.r3[lang]}`)
  //     }
  //   }, [cookies[cookieName]])

  return courthouse
}

export { useCourthouse, cookieName }
