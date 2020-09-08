import React, { useContext } from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { GlobalStateContext } from "../../context/global-context-provider"
import { logic } from "../../shared"

const screenerType = "school"

const Contact = () => {
  const state = useContext(GlobalStateContext)

  return (
    <QuestionTemplate
      lang="fr"
      screenerType={screenerType}
      yesLink={logic[screenerType].q5.yes}
      noLink={logic[screenerType].q5.no}
    >
        {state.screenie && state.screenie === "guardian" ? (
            <h2>Au cours des 14 derniers jours, ont-ils été en contact physique étroit avec une personne qui est actuellement atteinte de la COVID&#8209;19?</h2>
      ) : (
            <h2>Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui est actuellement atteinte de la COVID&#8209;19?</h2>
      )}
          <p>Ceci comprend la réception d’une notification d’exposition envoyée par l’application Alerte COVID.</p>
            <p>« Contact physique étroit » signifie :</p>
            <ul>
            <li>se trouver à moins de deux mètres de la personne dans la même pièce, dans le même lieu de travail ou au même endroit</li>
            <li>vivre dans le même logement</li>
            <li>se trouver dans la même salle de classe</li>
            </ul>
  </QuestionTemplate>
)
}

export default Contact