import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const PositiveTest = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q4.yes} noLink={logic.q4.no}>
    <h2>Au cours des 14 derniers jours, avez-vous&nbsp;:</h2>
    <ul>
      <li>reçu un résultat positif à un test de dépistage de la COVID-19? ou</li>
      <li>
        été en contact étroit avec une personne ayant récemment reçu un résultat positif à un test de dépistage de la
        COVID-19?
      </li>
    </ul>
    <p>« contact physique étroit » signifie&nbsp;: </p>
    <ul>
      <li>
        se trouver à moins de deux mètres de la personne, dans la même pièce, dans le même lieu de travail ou au même
        endroit
      </li>
      <li>vivre dans le même logement</li>
    </ul>
  </QuestionTemplate>
)

export default PositiveTest
