import { onsetTemplate } from "../localized_content"
/*
    q1: "travel"
    q2: "self-isolation"
    q3: "positive test"
    q4: "contact"
    q5: "symptoms"

    r1: "approved"
    r2: "denied"
*/
export default {
  q1: { yes: () => "r2", no: () => "q2" },
  q2: { yes: () => "r2", no: () => "q3" },
  q3: { yes: () => "r2", no: () => "q4" },
  q4: { yes: () => "r2", no: () => "q5" },
  q5: { cont: state => (state.symptomScore ? "r2" : "r1") },
}
