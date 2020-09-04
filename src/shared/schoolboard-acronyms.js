const acronyms = {
  CDSB: "Catholic District School Board",
  CS: "Conseil scolaire",
  DSB: "District School Board",
  EA: "Education Authority",
  PSSB: "Protestant Separate School Board",
  SA: "School Authority",
  CSDC: "Conseil scolaire de district catholique",
  SSB: "Secondary school board",
  CSD: "Conseil scolaire de district",
  CÉP: "Conseil des écoles publiques",
  DSAB: "District School Area Board",
}

const joinedKeys = Object.keys(acronyms).join("|")
const acronymRegex = new RegExp(`^(${joinedKeys})\\s|\\s(${joinedKeys})$`, "g")

export default str => str.replace(acronymRegex, matched => ` ${acronyms[matched.trim()]} `).trim()
