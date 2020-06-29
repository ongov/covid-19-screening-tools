import footer from "./footer"
import questions from "./questions"
import outcomeContactCard from "./outcome-contact-card"

const general = {
  en: {
    lang: "english",
    lang_abbr: "EN",
    basePath: "/courthouse-screener/",
    title: "COVID-19 self-assessment",
    resultsTitle: "COVID-19 self-assessment result",
    backButtonText: "Back to previous page",
    continueButtonText: "Continue",
    skipButtonText: "Skip",
    yes: "Yes",
    no: "No",
    skipNavText: "Skip to main content",
    savePDF: "Save self-assessment result (PDF)",
    postalCode: "Postal code (X1X)",
    timeStamp: "Completed on",
  },
  fr: {
    lang: "français",
    lang_abbr: "FR",
    basePath: "/depistage-tribunaux/",
    title: "COVID-19 auto-évaluation",
    resultsTitle: "Résultat de l’auto-évaluation pour la COVID-19",
    backButtonText: "Retour à la page précédente",
    continueButtonText: "Continuer",
    yes: "Oui",
    no: "Non",
    skipNavText: "Passer directement au contenu principal",
    savePDF: "Enregistrer le résultat de l’auto-évaluation (PDF)",
    postalCode: "Code postal (X1X)",
    timeStamp: "Auto-évaluation remplie le",
  },
}

export { general, footer, questions, outcomeContactCard }
