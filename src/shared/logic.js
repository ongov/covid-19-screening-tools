/**
 * This file contains the logic that drives the flow of the application.
 * Each of the questions receives the state object as a parameter so if
 * state needs to be used to determine outcomes it is available.
 *    q1: "travel"
 *    q2: "self-isolation"
 *    q3: "positive test"
 *    q4: "contact"
 *    q5: "symptoms"
 *
 *    r1: "approved"
 *    r2: "denied"
 */
export default {
  q1: { yes: () => "r2", no: () => "q2" },
  q2: { yes: () => "r2", no: () => "q3" },
  q3: { yes: () => "r2", no: () => "q4" },
  q4: { yes: () => "r2", no: () => "q5" },
  q5: {
    cont: state =>
      !state.q5 || !Object.keys(state.q5).length || state.q5.hasOwnProperty("none_of_the_above") ? "r1" : "r2",
  },
}
