export default ({ courthouse, lang, pass }) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-cs-outcome",
      pass,
      lang,
      courthouse: courthouse.court_name_display,
    })
  }
}
