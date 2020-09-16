import React from "react"
const resultsSchool = {
  en: {
    title: "COVID-19 school screening result",
    approveHeading: "Go to school",
    approveSubHeading: "School",
    deniedHeading: "Do not go to school",
    deniedSubHeading: "Do not go to",
    instructionsYou: "You can go to school because you seem to be healthy and have not been exposed to COVID-19.",
    instructionsThem: "They can go to school because they seem to be healthy and have not been exposed to COVID-19.",
    nextSteps: "Next steps",
    nextStepsDeniedContentYou: [
      <>
        <ol>
          <li>Contact the school to let them know about this result </li>
          <li>
            You should{" "}
            <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" target="_blank" rel="noopener">
              isolate
            </a>{" "}
            (stay home) and not leave except to get tested or for a medical emergency
          </li>
          <li>
            Talk with a doctor/health care provider or{" "}
            <a href="https://covid-19.ontario.ca/assessment-centre-locations/" target="_blank" rel="noopener">
              visit an assessment centre
            </a>{" "}
            to get a COVID-19 test
          </li>
        </ol>
      </>,
    ],
    nextStepsDeniedContentThem: [
      <>
        <ol>
          <li>Contact the school to let them know about this result </li>
          <li>
            They should{" "}
            <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-3" target="_blank" rel="noopener">
              isolate
            </a>{" "}
            (stay home) and not leave except to get tested or for a medical emergency
          </li>
          <li>
            Talk with a doctor/health care provider or{" "}
            <a href="https://covid-19.ontario.ca/assessment-centre-locations/" target="_blank" rel="noopener">
              visit an assessment centre
            </a>{" "}
            to get a COVID-19 test
          </li>
        </ol>
      </>,
    ],
    nextStepsLinkText: "Retake this screening",
    nextStepsInstructionYou: "every day before going to school.",
    nextStepsInstructionThem: "every day before going to school.",
    HealthAndSafetyTipsHeading: "Health and safety tips",
    HealthAndSafetyTipsYou: [
      <>
        <ul>
          <li>
            If you are wearing a face covering or mask, make sure you have it on whenever you are indoors and that it
            covers both your mouth and nose
          </li>
          <li>Wash or sanitize your hands often</li>
        </ul>
      </>,
    ],
    HealthAndSafetyTipsThem: [
      <>
        <ul>
          <li>
            If they are wearing a face covering or mask, make sure they have it on whenever they are indoors and that it
            covers both their mouth and nose
          </li>
          <li>They should wash or sanitize their hands often</li>
        </ul>
      </>,
    ],
    HealthAndSafetyLinkText: "Learn how students and staff will be protected.",
    HealthAndSafetyLink: "https://www.ontario.ca/page/covid-19-reopening-schools#section-5",
    downloadPDF: "Download results (PDF)",
    pdfFileName: "COVID-19 school screening result",
    staySafe: "Download the COVID Alert mobile app",
    downloadApp:
      "Protect yourself and your community. Get a phone alert if you have been exposed to COVID-19 and let others know if you test positive, without sharing any personal information.",
    downloadAppLinkText: "Learn how it works.",
    downloadAppLink: "http://ontario.ca/covidalert",
    GoingtoSchoolHeading: "Going to school again",
    GoingtoSchoolYou: [
      <>
        <p>Not sure about returning to school? Talk with a health care provider.</p>
        <h3 className="h4-style">If you do not get tested</h3>
        <p>You should isolate for 14 days, unless all the following apply:</p>
        <ul>
          <li>a doctor diagnosed you with another illness</li>
          <li>you do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since your symptoms started improving (if you had symptoms)</li>
        </ul>
        <h3 className="h4-style">If you test negative (you do not have the virus)</h3>
        <p>You can return to school if all the following apply:</p>
        <ul>
          <li>you do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since your symptoms started improving (if you had symptoms)</li>
        </ul>
        <h3 className="h4-style">
          If you test positive (you have the virus) or are a close contact of someone with COVID-19 as determined by
          public health
        </h3>
        <p>You can return to school only when you are cleared by your local public health unit.</p>
      </>,
    ],
    GoingtoSchoolThem: [
      <>
        <p>Not sure about returning to school? Talk with a health care provider. </p>
        <h3 className="h4-style">If they do not get tested</h3>
        <p>They should isolate for 14 days, unless all the following apply:</p>
        <ul>
          <li>a doctor diagnosed them with another illness </li>
          <li>they do not have a fever (without using medication) </li>
          <li>it has been at least 24 hours since their symptoms started improving (if they had symptoms) </li>
        </ul>
        <h3 className="h4-style">If they test negative (they do not have the virus)</h3>
        <p>They can return to school if all the following apply:</p>
        <ul>
          <li>they do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since their symptoms started improving (if they had symptoms)</li>
        </ul>
        <h3 className="h4-style">
          If they test positive (they have the virus) or are a close contact of someone with COVID-19 as determined by
          public health
        </h3>
        <p>They can return to school only when they are cleared by your local public health unit. </p>
      </>,
    ],
    siblingsHeading: "Siblings or other people you live with who do not have symptoms",
    siblingsContent: [
      <>
        <p>
          If someone in your household has symptoms, contact your{" "}
          <a
            href="http://www.health.gov.on.ca/en/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            local public health unit
          </a>{" "}
          to see if those without symptoms should go to school.
        </p>
        <p>Some public health units, like Ottawa and Peel, have different rules based on local risk.</p>
      </>,
    ],
  },
  fr: {
    title: "Résultat du dépistage de la COVID-19 pour les écoles",
    approveHeading: "Se présenter à l’école",
    approveSubHeading: "École",
    deniedHeading: "Ne pas se présenter à l’école ",
    deniedSubHeading: "Ne pas se présenter à",
    instructionsYou:
      "Vous pouvez aller à l’école parce que vous semblez être en bonne santé et que vous n’avez pas été exposé à la COVID-19.",
    instructionsThem:
      "Ils peuvent aller à l’école parce qu’ils semblent être en bonne santé et qu’ils n’ont pas été exposés à la COVID-19.",
    nextSteps: "Prochaines étapes",
    nextStepsDeniedContentYou: [
      <>
        <ol>
          <li>Communiquez avec le personnel de l’école pour l’informer de ce résultat </li>
          <li>
            Vous devez vous{" "}
            <a
              href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3"
              rel="noopener"
              target="_blank"
            >
              isoler
            </a>{" "}
            (rester à la maison) et ne pas sortir, sauf pour subir un test ou en cas d’urgence médicale
          </li>
          <li>
            Discutez avec un médecin ou un fournisseur de soins de santé, ou{" "}
            <a href="https://covid-19.ontario.ca/emplacements-centres-devaluation/" rel="noopener" target="_blank">
              présentez-vous dans un centre d’évaluation
            </a>{" "}
            si vous voulez subir un test de dépistage de la COVID-19
          </li>
        </ol>
      </>,
    ],
    nextStepsDeniedContentThem: [
      <>
        <ol>
          <li>Communiquez avec le personnel de l’école pour l’informer de ce résultat </li>
          <li>
            Ils doivent{" "}
            <a
              href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-3"
              rel="noopener"
              target="_blank"
            >
              s'isoler
            </a>{" "}
            (rester à la maison) et ne pas sortir, sauf pour subir un test ou en cas d’urgence médicale
          </li>
          <li>
            Discutez avec un médecin ou un fournisseur de soins de santé, ou{" "}
            <a href="https://covid-19.ontario.ca/emplacements-centres-devaluation/" rel="noopener" target="_blank">
              présentez-vous dans un centre d’évaluation
            </a>{" "}
            pour passer un test de dépistage de la COVID-19
          </li>
        </ol>
      </>,
    ],
    nextStepsLinkText: "Passer à nouveau ce dépistage",
    nextStepsInstructionYou: "chaque jour avant de vous rendre à l’école.",
    nextStepsInstructionThem: "chaque jour avant de se rendre à l’école.",
    HealthAndSafetyTipsHeading: "Conseils de santé et sécurité",
    HealthAndSafetyTipsYou: [
      <>
        <ul>
          <li>
            Si vous portez un couvre-visage ou un masque, assurez-vous de le porter chaque fois que vous vous trouvez à
            l’intérieur et qu’il couvre votre bouche et votre nez
          </li>
          <li>Lavez-vous ou désinfectez-vous les mains souvent</li>
        </ul>
      </>,
    ],
    HealthAndSafetyTipsThem: [
      <>
        <ul>
          <li>
            S’ils portent un couvre-visage ou un masque, assurez-vous qu’ils le portent chaque fois qu’ils se trouvent à
            l’intérieur et qu’il couvre leur bouche et leur nez
          </li>
          <li>Ils doivent se laver ou se désinfecter les mains souvent</li>
        </ul>
      </>,
    ],
    HealthAndSafetyLinkText: "Apprenez comment les élèves et les membres du personnel seront protégés.",
    HealthAndSafetyLink: "https://www.ontario.ca/fr/page/covid-19-reouverture-des-ecoles#section-5",
    downloadPDF: "Enregistrer le résultat (PDF)",
    pdfFileName: "Résultat du dépistage de la COVID-19 pour les écoles",
    staySafe: "Téléchargez l’application mobile Alerte COVID ",
    downloadApp:
      "Protégez-vous et protégez votre collectivité. Recevez une alerte sur votre téléphone si vous avez possiblement été exposé à la COVID-19, et informez les autres si vous recevez un résultat de test positif, sans que vos renseignements personnels soient divulgués.",
    downloadAppLinkText: "Apprenez comment l’application fonctionne.",
    downloadAppLink: "https://covid-19.ontario.ca/fr/covidalerte",
    GoingtoSchoolHeading: "Retourner à l’école",
    GoingtoSchoolYou: [
      <>
        <p>Vous hésitez concernant votre retour à l’école? Discutez avec un fournisseur de soins de santé.</p>
        <h3 className="h4-style">Si vous ne passez pas de test</h3>
        <p>Vous devriez vous isoler pendant 14 jours, à moins que tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>un médecin vous a diagnostiqué une autre maladie</li>
          <li>vous ne faites pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que vos symptômes ont commencé à s’atténuer (si vous présentiez
            des symptômes)
          </li>
        </ul>
        <h3 className="h4-style">Si vous recevez un résultat de test négatif (vous n’avez pas le virus)</h3>
        <p>Vous pouvez retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>vous ne faites pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que vos symptômes ont commencé à s’atténuer (si vous présentiez
            des symptômes)
          </li>
        </ul>
        <h3 className="h4-style">
          Si vous recevez un résultat de test positif (vous avez le virus) ou que vous êtes un contact étroit selon la
          définition de la santé publique
        </h3>
        <p>Vous pouvez retourner à l’école seulement lorsqu’un bureau de santé publique vous autorise à le faire.</p>
      </>,
    ],
    GoingtoSchoolThem: [
      <>
        <p>Vous hésitez concernant leur retour à l’école? Discutez avec un fournisseur de soins de santé.</p>
        <h3 className="h4-style">S’ils ne passent pas de test</h3>
        <p>Ils devraient s'isoler pendant 14 jours, à moins que tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>un médecin leur a diagnostiqué une autre maladie</li>
          <li>ils ne font pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que leurs symptômes ont commencé à s’atténuer (s’ils présentaient
            des symptômes)
          </li>
        </ul>
        <h3 className="h4-style">S’ils reçoivent un résultat de test négatif (ils n’ont pas le virus)</h3>
        <p>Ils peuvent retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>ils ne font pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que leurs symptômes ont commencé à s’atténuer (s’ils présentaient
            des symptômes)
          </li>
        </ul>
        <h3 className="h4-style">
          S’ils reçoivent un résultat de test positif (ils ont le virus) ou qu’ils sont un contact étroit selon la
          définition de la santé publique
        </h3>
        <p>Ils peuvent retourner à l’école seulement lorsqu’un bureau de santé publique les autorise à le faire.</p>
      </>,
    ],
    siblingsHeading: "Frères, sœurs et autres personnes vivant sous le même toit et ne présentant pas de symptômes",
    siblingsContent: [
      <>
        <p>
          Si une personne au sein de votre foyer présente des symptômes, veuillez communiquer avec{" "}
          <a
            href="http://www.health.gov.on.ca/fr/common/system/services/phu/locations.aspx"
            target="_blank"
            rel="noopener"
          >
            votre bureau de santé publique
          </a>{" "}
          local pour savoir si les membres de votre foyer ne présentant pas de symptômes peuvent se rendre à l’école.
        </p>
        <p>
          Certains bureaux de santé publique, comme ceux d’Ottawa et de Peel, appliquent des règles différentes en
          fonction du risque local.
        </p>
      </>,
    ],
  },
}

export default resultsSchool
