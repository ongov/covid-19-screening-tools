/**
 * This file contains the logic that drives the flow of the application.
 * Each of the questions receives the state object as a parameter so if
 * state needs to be used to determine outcomes it is available.
 *    q1: "symptoms"
 *    q2: "travel"
 *    q3: "self-isolation"
 *    q4: "positive test"
 *    q5: "contact"
 *    q6: "cleared"
 *    q7: "doctor self-isolate"
 *    q8: "context"
 *    q9: "symptoms-confirm"
 *
 *    r1: "approved"
 *    r2: "denied"
 */
export default {
  courthouse: {
    q1: {
      cont: state =>
        !state.q1 || !Object.keys(state.q1).length || state.q1.hasOwnProperty("none_of_the_above") ? "q2" : "r2",
    },
    q2: { yes: () => "r2", no: () => "q3" },
    q3: { yes: () => "r2", no: () => "q4" },
    q4: { yes: () => "r2", no: () => "q5" },
    q5: { yes: () => "q6", no: () => "r1" },
    q6: { yes: () => "q7", no: () => "r2" },
    q7: { yes: () => "r2", no: () => "r1" },
  },
  school: {
    q1: {
      cont: state =>
        !state.q1 || !Object.keys(state.q1).length || state.q1.hasOwnProperty("none_of_the_above") ? "q2" : "q9",
    },
    q2: { yes: () => "r2", no: () => "q4" },
    q4: { yes: () => "r2", no: () => "q5" },
    q5: { yes: () => "r2", no: () => "q3" },
    q3: { yes: () => "r2", no: () => "r1" },
    q8: { cont: () => "q1" },
    q9: { yes: () => "q2", no: () => "r2" },
  },
}
