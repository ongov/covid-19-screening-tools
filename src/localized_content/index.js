import footer from "./footer"
import deniedContactCard from "./denied-contact-card"
import { symptomsTitle, symptoms, noSymptomsId } from "./symptoms"
import landing from "./landing"
import results from "./results"
import formatDate from "./date-format"

const general = {
  en: {
    lang: "english",
    lang_abbr: "EN",
    basePath: "/courthouse-screening/",
    title: "COVID-19 courthouse screening",
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
    basePath: "/depistage-tribunaux/",
    title: "COVID-19 dépistage tribunaux",
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
  },
}

export {
  landing,
  general,
  footer,
  deniedContactCard as outcomeContactCard,
  symptomsTitle,
  symptoms,
  noSymptomsId,
  results,
  formatDate,
}
