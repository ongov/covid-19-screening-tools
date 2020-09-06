import React from "react"
const resultsSchool = {
  en: {
    title: "COVID-19 screening result",
    approveHeading: "Go to school",
    approveSubHeading: "School",
    deniedHeading: "Do not go to school",
    deniedSubHeading: "Do not go to",
    nextSteps: "Next steps",
    nextStepsContentYou: [
      <>
        <ol>
          <li>Go to school</li>
          <li>Tell a staff member about this result (if asked)</li>
        </ol>
      </>,
    ],
    nextStepsContentThem: [
      <>
        <ol>
          <li>Go to school</li>
          <li>Tell a staff member about this result (if asked)</li>
        </ol>
      </>,
    ],
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
          <li>
            Check the school reopening guidance posted on your local public health unit’s website for any other actions
            you or the people you live with need to take
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
          <li>
            Check the school reopening guidance posted on your local public health unit’s website for any other actions
            they or the people they live with need to take
          </li>
        </ol>
      </>,
    ],
    nextStepsLinkText: "Retake this screening",
    nextStepsInstruction: "every day before going to school.",
    HealthAndSafetyTipsHeading: "Health and safety tips",
    HealthAndSafetyTipsYou: [
      <>
        <ul>
          <li>Try to keep 2 metres away from people as much as possible</li>
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
          <li>They should try to keep 2 metres away from people as much as possible</li>
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
    pdfFileName: "COVID-19 School Screening Results",
    staySafe: "Download the COVID Alert mobile app",
    downloadApp:
      "Protect yourself and your community. Get a phone alert if you have been exposed to COVID-19 and let others know if you test positive, without sharing any personal information.",
    downloadAppLinkText: "Learn how it works",
    downloadAppLink: "http://ontario.ca/covidalert",
    GoingtoSchoolHeading: "Going to school again",
    GoingtoSchoolYou: [
      <>
        <p>Not sure about returning to school? Talk with a health care provider.</p>
        <p>
          <strong>If you do not get tested</strong>
        </p>
        <p>You can return to school if all the following apply:</p>
        <ul>
          <li>a doctor diagnosed you with another illness</li>
          <li>you do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since your symptoms started improving (if you had symptoms)</li>
        </ul>
        <p>
          <strong>If you test negative (you do not have the virus)</strong>
        </p>
        <p>You can return to school if all the following apply:</p>
        <ul>
          <li>you do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since your symptoms started improving (if you had symptoms)</li>
        </ul>
        <p>
          <strong>
            If you test positive (you have the virus) or are a close contact of someone with COVID-19 as determined by
            public health
          </strong>
        </p>
        <p>You can return to school only when you are cleared by a doctor or public health unit.</p>
      </>,
    ],
    GoingtoSchoolThem: [
      <>
        <p>Not sure about returning to school? Talk with a health care provider. </p>
        <p>
          <strong>If they do not get tested</strong>
        </p>
        <p>They can return to school if all the following apply:</p>
        <ul>
          <li>a doctor diagnosed them with another illness </li>
          <li>they do not have a fever (without using medication) </li>
          <li>it has been at least 24 hours since their symptoms started improving (if they had symptoms) </li>
        </ul>
        <p>
          <strong>If they test negative (they do not have the virus)</strong>
        </p>
        <p>They can return to school if all the following apply:</p>
        <ul>
          <li>they do not have a fever (without using medication)</li>
          <li>it has been at least 24 hours since their symptoms started improving (if they had symptoms)</li>
        </ul>
        <p>
          <strong>
            If they test positive (they have the virus) or are a close contact of someone with COVID-19 as determined by
            public health
          </strong>
        </p>
        <p>They can return to school only when they are cleared by a doctor or public health unit. </p>
      </>,
    ],
  },
  fr: {
    title: "Résultat du dépistage scolaire de la COVID-19",
    approveHeading: "Se présenter à l’école",
    approveSubHeading: "École",
    deniedHeading: "Ne pas se présenter à l’école ",
    deniedSubHeading: "Ne pas se présenter à",
    nextSteps: "Prochaines étapes",
    nextStepsContentYou: [
      <>
        <ol>
          <li>Se présenter à l’école </li>
          <li>Informer un membre du personnel de ce résultat (si on vous le demande)</li>
        </ol>
      </>,
    ],
    nextStepsContentThem: [
      <>
        <ol>
          <li>Se présenter à l’école </li>
          <li>Informer un membre du personnel de ce résultat (si on vous le demande)</li>
        </ol>
      </>,
    ],
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
            (rester à la maison) et ne pas sortir, sauf pour subir un test ou en cas d’urgence médicale.
          </li>
          <li>
            Discutez avec un médecin ou un fournisseur de soins de santé, ou{" "}
            <a href="https://covid-19.ontario.ca/emplacements-centres-devaluation/" rel="noopener" target="_blank">
              présentez-vous dans un centre d’évaluation
            </a>{" "}
            si vous voulez subir un test de dépistage de la COVID-19.
          </li>
          <li>Pour connaître toute autre mesure que vous ou les personnes avec qui vous vivez devez prendre, veuillez lire les directives relatives à la
              réouverture des écoles, publiées sur le site Web de votre bureau local de santé publique
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
            (rester à la maison) et ne pas sortir, sauf pour subir un test ou en cas d’urgence médicale.
          </li>
          <li>
            Discutez avec un médecin ou un fournisseur de soins de santé, ou{" "}
            <a href="https://covid-19.ontario.ca/emplacements-centres-devaluation/" rel="noopener" target="_blank">
              présentez-vous dans un centre d’évaluation
            </a>{" "}
            pour passer un test de dépistage de la COVID-19.
          </li>
          <li>Pour connaître toute autre mesure qu’ils ou les personnes avec qui ils vivent devez prendre, veuillez lire les directives relatives à la réouverture des écoles, publiées sur le site Web de votre bureau local de santé publique </li>
        </ol>
      </>,
    ],
    nextStepsLinkText: "Passer à nouveau ce dépistage",
    nextStepsInstruction: "chaque jour avant de vous rendre à l’école.",
    HealthAndSafetyTipsHeading: "Conseils de santé et sécurité",
    HealthAndSafetyTipsYou: [
      <>
        <ul>
          <li>Essayez autant que possible de rester à deux mètres des autres</li>
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
          <li>Ils doivent essayer autant que possible de rester à deux mètres des autres</li>
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
    pdfFileName: "Résultat du dépistage scolaire de la COVID-19",
    staySafe: "Téléchargez l’application mobile Alerte COVID ",
    downloadApp:
      "Protégez-vous et protégez votre collectivité. Recevez une alerte sur votre téléphone si vous avez possiblement été exposé à la COVID-19, et informez les autres si vous recevez un résultat de test positif, sans que vos renseignements personnels soient divulgués.",
    downloadAppLinkText: "Apprenez comment l’application fonctionne",
    downloadAppLink: "https://covid-19.ontario.ca/fr/covidalerte",
    GoingtoSchoolHeading: "Retourner à l’école",
    GoingtoSchoolYou: [
      <>
        <p>Vous hésitez concernant votre retour à l’école? Discutez avec un fournisseur de soins de santé.</p>
        <p>
          <strong>Si vous ne passez pas de test</strong>
        </p>
        <p>Vous pouvez retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>un médecin vous a diagnostiqué une autre maladie</li>
          <li>vous ne faites pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que vos symptômes ont commencé à s’atténuer (si vous présentiez
            des symptômes)
          </li>
        </ul>
        <p>
          <strong>Si vous recevez un résultat de test négatif (vous n’avez pas le virus)</strong>
        </p>
        <p>Vous pouvez retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>vous ne faites pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que vos symptômes ont commencé à s’atténuer (si vous présentiez
            des symptômes)
          </li>
        </ul>
        <p>
          <strong>
            Si vous recevez un résultat de test positif (vous avez le virus) ou que vous êtes un contact étroit selon la
            définition de la santé publique
          </strong>
        </p>
        <p>
          Vous pouvez retourner à l’école seulement lorsqu’un médecin ou un bureau de santé publique vous autorise àle
          faire.
        </p>
      </>,
    ],
    GoingtoSchoolThem: [
      <>
        <p>Vous hésitez concernant leur retour à l’école? Discutez avec un fournisseur de soins de santé.</p>
        <p>
          <strong>S’ils ne passent pas de test</strong>
        </p>
        <p>Ils peuvent retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>un médecin leur a diagnostiqué une autre maladie</li>
          <li>ils ne font pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que leurs symptômes ont commencé à s’atténuer (s’ils présentaient
            des symptômes)
          </li>
        </ul>
        <p>
          <strong>S’ils reçoivent un résultat de test négatif (ils n’ont pas le virus)</strong>
        </p>
        <p>Ils peuvent retourner à l’école si tous les critères qui suivent s’appliquent :</p>
        <ul>
          <li>ils ne font pas de fièvre (sans prendre de médicaments)</li>
          <li>
            au moins 24 heures se sont écoulées depuis que leurs symptômes ont commencé à s’atténuer (s’ils présentaient
            des symptômes)
          </li>
        </ul>
        <p>
          <strong>
            S’ils reçoivent un résultat de test positif (ils ont le virus) ou qu’ils sont un contact étroit selon la
            définition de la santé publique
          </strong>
        </p>
        <p>
          Ils peuvent retourner à l’école seulement lorsqu’un médecin ou un bureau de santépublique les autorise à le
          faire.
        </p>
      </>,
    ],
  },
}

export default resultsSchool
