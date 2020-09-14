import React from "react"
import { footer, queensPrinter } from "./footer"
import deniedContactCard from "./denied-contact-card"
import { symptomsTitle, symptoms, noSymptomsId } from "./symptoms"
import landing from "./landing"
import schoolLanding from "./school-landing"
import results from "./results"
import formatDate from "./date-format"
import { schoolContextChoices, schoolContextContent } from "./context-choices-school"
import feedback from "./feedback"
import resultsSchool from "./results-school"
import screening from "./screening"

const general = {
  en: {
    lang: "english",
    lang_abbr: "EN",
    courthouse: {
      screeningType: "courthouse",
      basePath: "/courthouse-screening/",
      title: "COVID-19 courthouse screening",
    },
    school: {
      screeningType: "school",
      basePath: "/school-screening/",
      title: "COVID-19 school screening",
    },
    backButtonText: "Back to previous page",
    continueButtonText: "Continue",
    skipButtonText: "Skip",
    yes: "Yes",
    no: "No",
    skipNavText: "Skip to main content",
    lastUpdated: "Last updated:",
    breadcrumbs: [
      { url: "https://www.ontario.ca/page/government-ontario", text: "Home" },
      { url: "https://www.ontario.ca/page/health-care-ontario", text: "Health and wellness" },
      { url: "https://covid-19.ontario.ca/", text: "COVID-19" },
    ],
    outcome: "COVID-19 screening result",
    expired: "Expired",
  },
  fr: {
    lang: "français",
    lang_abbr: "FR",
    courthouse: {
      screeningType: "tribunaux",
      basePath: "/depistage-tribunaux/",
      title: "COVID-19 dépistage tribunaux",
    },
    school: {
      screeningType: "pour-les-ecoles",
      basePath: "/depistage-pour-les-ecoles/",
      title: "Dépistage de la COVID-19 pour les écoles",
    },
    backButtonText: "Retour à la page précédente",
    continueButtonText: "Continuer",
    yes: "Oui",
    no: "Non",
    skipNavText: "Passer directement au contenu principal",
    lastUpdated: "Dernière version :",
    breadcrumbs: [
      { url: "https://www.ontario.ca/fr/page/gouvernement-de-lontario", text: "Accueil" },
      { url: "https://www.ontario.ca/fr/page/les-soins-de-sante-en-ontario", text: "Les soins de santé en Ontario" },
      { url: "https://covid-19.ontario.ca/fr", text: "COVID-19" },
    ],
    outcome: "COVID-19 screening result",
    expired: "Expired",
    contact_tracing: {
      heading: (
        <>
          Contact tracing <br className="ontario-show-for-small-only" />
          (optional)
        </>
      ),
      content: (
        <>
          <p>Ask the screening staff for a card to fill in your information.</p>
          <p>
            Write down your name and phone number on a "contact tracing card" in case there is an outbreak at the
            courthouse.
          </p>
          <p>
            If there is an outbreak, Public Health will call and help you understand your risk and how you can stop the
            spread of the virus.
          </p>
        </>
      ),
    },
  },
}

export {
  landing,
  schoolLanding,
  general,
  footer,
  queensPrinter,
  deniedContactCard as outcomeContactCard,
  symptomsTitle,
  symptoms,
  noSymptomsId,
  results,
  formatDate,
  schoolContextChoices,
  schoolContextContent,
  feedback,
  resultsSchool,
  screening,
}
