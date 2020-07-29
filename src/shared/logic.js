/**
 * This file contains the logic that drives the flow of the application.
 * Each of the questions receives the state object as a parameter so if
 * state needs to be used to determine outcomes it is available.
 *    q1: "travel"
 *    q2: "self-isolation"
 *    q3: "positive test"
 *    q4: "contact"
 *    q5: "symptoms"
 *    q6: "cleared"
 *    q7: "doctor self-isolate"
 *
 *    r1: "approved"
 *    r2: "denied"
 */
export default {
  q1: {
    cont: state =>
      !state.q1 || !Object.keys(state.q1).length || state.q1.hasOwnProperty("none_of_the_above") ? "q2" : "r2",
  },
  q2: { yes: () => "r2", no: () => "q3" },
  q3: { yes: () => "r2", no: () => "q4" },
  q4: { yes: () => "r2", no: () => "q5" },
  q5: { yes: () => "q6", no: () => "r2" },
  q6: { yes: () => "r2", no: () => "q7" },
  q7: { yes: () => "r2", no: () => "r1" },
}
