import { getLocalizedSchoolDataField } from "../localized_content"

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
  const { screenie, school, q1 } = state

  if (window && window.dataLayer) {
    const dataLayerObject = {
      event: "covid-19-ss-outcome",
      pass,
      lang,
      school: "none selected",
      userType: screenie,
      symptoms: q1 && Object.keys(q1),
    }

    if (school && school.value) {
      dataLayerObject.school = school.value[getLocalizedSchoolDataField(lang, "School Name")]
      dataLayerObject.schoolBoard = school.value[getLocalizedSchoolDataField(lang, "Board Number")]
      dataLayerObject.schoolNumber = school.value[getLocalizedSchoolDataField(lang, "School Number")]
    }

    window.dataLayer.push(dataLayerObject)
  }
}

export { pushOutcomeDataToGTM, pushSchoolOutcomeDataToGTM }
