import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {}
const noSymptomsId = "none_of_the_above"

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SYMPTOM": {
      const { id } = action
      const updatedState = { ...state }

      // Case where we are clicking an already checked checkbox
      if (updatedState.q5 && updatedState.q5.hasOwnProperty(id)) {
        delete updatedState.q5[id]
      } else {
        if (!updatedState.q5) updatedState.q5 = {}
        // "none of the above" was clicked or it was checked previous to this click.
        // We clear all other symptoms from the state as "none of the above" should
        // alway be used by itself.
        if (id === noSymptomsId || updatedState.q5.hasOwnProperty(noSymptomsId)) {
          updatedState.q5 = {}
        }

        updatedState.q5[id] = true
      }

      return updatedState
    }
    case "SYMPTOMS_CONTINUE_CLICKED": {
      let updatedState = { ...state }
      if (!state.q5 || !Object.keys(state.q5).length) {
        updatedState = { ...state, q5: {} }
        updatedState.q5[noSymptomsId] = true
      }
      return updatedState
    }
    case "COURTHOUSE_SELECTED": {
      const { courthouse } = action
      return { ...state, courthouse }
    }
    case "CS_START":
    case "CS_BACK_BUTTON_PRESSED": {
      return { ...state, in_progress: true }
    }
    case "CS_DONE": {
      return { ...state, in_progress: false }
    }
    default:
      throw new Error(`Bad Action Type: ${action.type}`)
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
