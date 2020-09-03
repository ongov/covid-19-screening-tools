import React from "react"
const resultsSchool = {
  en: {
    title: "COVID-19 screening result",
    approveHeading: "Go to school",
    approveSubHeading: "School",
    deniedHeading: "Do not go to school",
    nextSteps: "Next steps",
    nextStepsContent: [
      <>
        <ol>
            <li>Go to school</li>
            <li>Tell a staff member about this result (if asked)</li>
        </ol>
      </>
    ],
    nextStepsDeniedContent: [
      <>
      <ol>
      <li>Contact the school to let them know about this result </li>
      <li>You should <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" target="_blank" rel="noopener">isolate</a> (stay home) and not leave except to get tested or for a medical emergency</li>
      <li>Speak with a doctor/health care provider or <a href="https://covid-19.ontario.ca/assessment-centre-locations/" target="_blank" rel="noopener">visit an assessment centre</a> if you want to get a COVID-19 test</li>
      </ol>
      </>
    ],
    nextStepsLinkText: "Retake this screening",
    nextStepsInstruction: "every day before going to school.",
    HealthAndSafetyTips: [
      <>
      <p><strong>Health and safety tips</strong></p>
      <p>Try to keep 2 metres away from people as much as possible.</p>
      <p>If you are wearing a face covering or mask, make sure you have it on whenever you are indoors and that it covers both your mouth and nose.</p>
      <p>Wash or sanitize your hands often.</p>
      </>
    ],
    HealthAndSafetyLinkText: "Learn how students and staff will be protected.",
    HealthAndSafetyLink: "https://www.ontario.ca/page/covid-19-reopening-schools#section-5",
    downloadPDF: "Download results (PDF)",
    staySafe: "Download the COVID Alert mobile app",
    downloadApp: "Protect yourself and your community. Get a phone alert if you have been exposed to COVID-19 and let others know if you test positive, without sharing any personal information.",
    downloadAppLinkText: "Learn how it works",
    downloadAppLink: "http://ontario.ca/covidalert",
},
fr: {
  title: "Résultats du dépistage des symptômes de la COVID-19",
  approveHeading: "Entrer",
  approveSubHeading: "Vous pouvez entrer",
  deniedHeading: "Ne pas entrer",
  nextSteps: "Prochaines étapes",
  nextStepsContent: [
    <>
    <ol>
    <li>Go to school</li>
    <li>Tell a staff member about this result (if asked)</li>
    </ol>
    </>
  ],
  nextStepsDeniedContent: [
    <>
    <ol>
    <li>Contact the school to let them know about this result </li>
    <li>You should <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" target="_blank" rel="noopener">isolate</a> (stay home) and not leave except to get tested or for a medical emergency</li>
    <li>Speak with a doctor/health care provider or <a href="https://covid-19.ontario.ca/assessment-centre-locations/" target="_blank" rel="noopener">visit an assessment centre</a> if you want to get a COVID-19 test</li>
    </ol>
    </>
  ],
  nextStepsLinkText: "Retake this screening",
  nextStepsInstruction: "every day before going to school.",
  HealthAndSafetyTips: [
    <>
    <p><strong>Health and safety tips</strong></p>
    <p>Try to keep 2 metres away from people as much as possible.</p>
    <p>If you are wearing a face covering or mask, make sure you have it on whenever you are indoors and that it covers both your mouth and nose.</p>
    <p>Wash or sanitize your hands often.</p>
    </>
  ],
  HealthAndSafetyLinkText: "Learn how students and staff will be protected.",
  HealthAndSafetyLink: "https://www.ontario.ca/page/covid-19-reopening-schools#section-5",
  downloadPDF: "(après avoir téléchargé les résultats d’un document en format PDF).",
  staySafe: "Téléchargez l’application mobile Alerte COVID",
  downloadApp: "Protégez-vous et votre communauté. Recevez une alerte sur votre téléphone si vous avez possiblement été exposé à la COVID-19, et informez les autres si vous recevez un résultat de test positif, sans que vos renseignements personnels soient divulgués.",
  downloadAppLinkText: "Apprenez comment ça fonctionne",
  downloadAppLink: "http://ontario.ca/alertecovid",
},
}

export default resultsSchool
