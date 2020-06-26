import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const CovidExposure = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q8.yes} noLink={logic.q8.no}>
    <h2>
      Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne ayant reçu un résultat
      positif au test de dépistage de la COVID-19?
    </h2>

    <p>Par contact physique étroit, on entend :</p>
    <ul>
      <li>se trouver à moins de deux mètres d’une personne dans la même pièce, le même lieu de travail ou la même zone</li>
      <li>vivre dans la même demeure</li>
    </ul>
  </QuestionTemplate>
)

export default CovidExposure
