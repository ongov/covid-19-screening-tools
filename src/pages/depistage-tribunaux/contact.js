import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const screenerType = "courthouse"

const Contact = () => (
  <QuestionTemplate
    lang="fr"
    screenerType={screenerType}
    yesLink={logic[screenerType].q5.yes}
    noLink={logic[screenerType].q5.no}
  >
    <h2>Au cours des 14 derniers jours, avez-vous été en contact physique étroit avec une personne qui est&nbsp;:</h2>
    <ul>
      <li>
        actuellement malade et présente de nouveaux symptômes de la COVID-19 (par exemple, toux, fièvre ou difficulté à
        respirer)? ou
      </li>
      <li>
        retournée au Canada d’un pays étranger ces deux dernières semaines et présente de nouveaux symptômes de la
        COVID-19 (par exemple, toux, fièvre ou difficulté à respirer)?
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

export default Contact
