import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Contact = () => (
  <QuestionTemplate lang="fr" yesLink={logic.q5.yes} noLink={logic.q5.no}>
    <h2>Ces 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui&nbsp;:</h2>
    <ul>
      <li>est actuellement malade et a de la toux, de la fièvre ou des difficultés respiratoires?  ou</li>
      <li>a subi un test de la COVID-19 et a été déclarée positive?  ou</li>
      <li>est retournée au Canada d’un pays étranger ces deux dernières semaines?</li>
    </ul>
    <p>« contact physique étroit » signifie&nbsp;: </p>
    <ul>
      <li>se trouver à moins de deux mètres de la personne, dans la même pièce, dans le même lieu de travail ou au même endroit;</li>
      <li>vivre dans le même logement.</li>
    </ul>
  </QuestionTemplate>
)

export default Contact
