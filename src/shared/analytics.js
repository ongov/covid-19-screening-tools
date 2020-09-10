const pushOutcomeDataToGTM = ({ courthouse, lang, pass }) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-cs-outcome",
      pass,
      lang,
      courthouse: courthouse.court_name_display,
    })
  }
}

const pushSchoolOutcomeDataToGTM = ({ state, lang, pass }) => {
  if (window && window.dataLayer) {
    const { screenie, q1 } = state

    window.dataLayer.push({
      event: "covid-19-ss-outcome",
      pass,
      lang,
      userType: screenie,
      symptoms: q1 && Object.keys(q1),
    })
  }
}

export { pushOutcomeDataToGTM, pushSchoolOutcomeDataToGTM }
