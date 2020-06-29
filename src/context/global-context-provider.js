import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {}
const noSymptomsId = "none_of_the_above"

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SYMPTOM": {
      const { id, value } = action
      const updatedState = { ...state }

      if (updatedState.q5 && updatedState.q5.hasOwnProperty(id)) {
        delete updatedState.q5[id]
      } else {
        if (!updatedState.q5) updatedState.q5 = {}
        // This is the scenario "none of the above" was selected previous to this click
        if (id === noSymptomsId || updatedState.q5.hasOwnProperty(noSymptomsId)) {
          updatedState.q5 = {}
        }

        updatedState.q5[id] = value
      }

      updatedState.symptomScore = calculateTotalScore(updatedState)

      return updatedState
    }
    case "SYMPTOMS_CONTINUE_CLICKED": {
      let updatedState = { ...state }
      if (!state.q5 || !Object.keys(state.q5).length) {
        updatedState = { ...state, q5: {}, symptomScore: 0 }
        updatedState.q5[noSymptomsId] = "0"
      }

      return updatedState
    }
    case "YES_NO_RESPONSE": {
      const updatedState = { ...state }
      updatedState[action.question] = action.response
      return updatedState
    }
    case "CS_START": {
      return { in_progress: true }
    }
    case "CS_BACK_BUTTON_PRESSED": {
      const newState = { ...state, in_progress: true }

      // We do this to hide the success bar accross the top if user goes back from results
      if (newState.contact_form_submitted_ok) delete newState.contact_form_submitted_ok
      return newState
    }
    case "CS_DONE": {
      return { ...state, in_progress: false }
    }
    default:
      throw new Error(`Bad Action Type: ${action.type}`)
  }
}

function calculateTotalScore(state) {
  if (!state.q5) return 0

  return Object.values(state.q5)
    .map(val => parseFloat(val))
    .reduce((acc, cur) => acc + cur, 0)
}

/*
    q3 - healthcare workers
    q4 - rural
    q5 - at-risk
    q6 - travel
    q7 - exposure to covid-19
    q8 - exposure to respiratory symptoms

    r2 - symptomatic, self-isolate
    r3 - practice physical distancing
    r4 - at-risk, self-isolate
    r5 - travel, self-isolate
    r6 - possible exposure, self-isolate
    r7 - call telehealth/doctor
*/

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
