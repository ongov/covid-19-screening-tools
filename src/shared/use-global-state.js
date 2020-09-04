import { useContext } from "react"
import { GlobalStateContext } from "../context/global-context-provider"

function useGlobalState() {
  const state = useContext(GlobalStateContext)

  return {
    isGuardian: state.screenie && state.screenie === "guardian",
    isFrench: state.language && state.language === "fr",
    state,
  }
}

export default useGlobalState
