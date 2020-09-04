import React from "react"
const resultsSchool = {
  en: {
    title: "COVID-19 screening result",
    approveHeading: "Go to school",
    approveSubHeading: "School",
    deniedHeading: "Do not go to school",
    deniedSubHeading: "Do not go to",
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
  title: "Résultat du dépistage de la COVID-19 pour les écoles ",
  approveHeading: "Se présenter à l’école",
  approveSubHeading: "Vous pouvez entrer",
  deniedHeading: "Ne pas se présenter à l’école ",
  deniedSubHeading: "Ne pas se présenter à",
  nextSteps: "Prochaines étapes",
  nextStepsContent: [
    <>
    <ol>
    <li>Se présenter à l’école </li>
    <li>Informer un membre du personnel de ce résultat (si on vous le demande)</li>
    </ol>
    </>
  ],
  nextStepsDeniedContent: [
    <>
    <ol>
    <li>Communiquez avec le personnel de l’école pour l’informer de ce résultat </li>
    <li>Vous devez vous <a href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3" rel="noopener" target="_blank">isoler</a> (rester à la maison) et ne pas sortir, sauf pour subir un test ou en cas d’urgence médicale.</li>
    <li>Discutez avec un médecin ou un fournisseur de soins de santé, ou <a href="https://covid-19.ontario.ca/emplacements-centres-devaluation/" rel="noopener" target="_blank">présentez-vous dans un centre d’évaluation</a> si vous voulez subir un test de dépistage de la COVID-19.</li>
    </ol>
    </>
  ],
  nextStepsLinkText: "Passer à nouveau ce dépistage",
  nextStepsInstruction: "chaque jour avant de vous rendre à l’école.",
  HealthAndSafetyTips: [
    <>
    <p><strong>Conseils de santé et sécurité</strong></p>
    <p>Essayez autant que possible de rester à deux mètres des autres. </p>
    <p>Si vous portez un couvre-visage ou un masque, assurez-vous de le porter chaque fois que vous vous trouvez à l’intérieur et qu’il couvre votre bouche et votre nez.</p>
    <p>Lavez-vous ou désinfectez-vous les mains souvent.</p>
    </>
  ],
  HealthAndSafetyLinkText: "Apprenez comment les élèves et les membres du personnel seront protégés.",
  HealthAndSafetyLink: "https://www.ontario.ca/fr/page/covid-19-reouverture-des-ecoles#section-5",
  downloadPDF: "Enregistrer le résultat (PDF)",
  staySafe: "Téléchargez l’application mobile Alerte COVID ",
  downloadApp: "Protégez-vous et protégez votre collectivité. Recevez une alerte sur votre téléphone si vous avez possiblement été exposé à la COVID-19, et informez les autres si vous recevez un résultat de test positif, sans que vos renseignements personnels soient divulgués.",
  downloadAppLinkText: "Apprenez comment l’application fonctionne",
  downloadAppLink: "https://covid-19.ontario.ca/fr/covidalerte",
},
}

export default resultsSchool
