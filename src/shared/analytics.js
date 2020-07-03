export default ({ courthouse, lang, outcome }) => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-cs-outcome",
      outcome,
      lang,
      courthouse: courthouse[`court_name_display${lang === "fr" ? "_fr" : ""}`],
    })
  }
}
