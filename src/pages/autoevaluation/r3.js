import React, {forwardRef, useRef} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button";

const lang = "fr"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Selon vos réponses, vous ne semblez pas présenter de symptômes ou faire partie d’un groupe à risque. Nous vous
          recommandons{" "}
          <strong>
            d’être prudent lorsque vous vous trouvez à l’extérieur et de maintenir une distance avec les autres le plus
            possible.
          </strong>
        </h2>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <SaveToPDFButton ref={ref} lang={lang} />
        </div>

        <div className="ontario-hide-for-print">
          <p>Sur cette page :</p>
          <ol>
            <li>
              <AnchorLink to="/autoevaluation/r3#avoid-going-out">Conseils pour rester en santé</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/autoevaluation/r3#monitor-your-health">
                Quand passer un test de diagnostic de la COVID-19
              </AnchorLink>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="avoid-going-out">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">1.</span> Conseils pour rester en santé{" "}
        </h3>

        <h4>Distanciation physique et lavage des mains</h4>
        <ul>
          <li>gardez une distance d’au moins 2 mètres (6 pieds) avec les personnes qui ne font pas partie de votre cercle social</li>
          <li>lavez vos mains ou désinfectez-les souvent</li>
        </ul>

        <h4>Cercles sociaux</h4>
        <ul>
          <li>choisissez jusqu’à 10 personnes avec lesquelles former un cercle social (y compris les personnes avec lesquelles vous vivez)</li>
          <li>vous pouvez interagir avec ces 10 personnes sans pratiquer l’éloignement social (comme donner des câlins, être à moins de 2 mètres)</li>
          <li>vous ou les autres personnes de votre cercle social <strong>ne pouvez pas</strong> faire partie de plus d’un cercle</li>
          <li><a href="https://www.ontario.ca/fr/page/creez-un-cercle-social-durant-la-pandemie-de-covid-19" target="_blank" rel="noopener">
            apprenez à créer un cercle social</a>
          </li>
        </ul>

        <h4>Rassemblement sociaux de 10 personnes</h4>
        <ul>
          <li>vous pouvez organiser des rassemblements avec un maximum de 10 personnes en dehors de votre cercle social</li>
          <li><strong>vous devez</strong> garder une distance d’au moins 2 mètres (6 pieds) l’un de l’autre</li>
          <li>essayez de vous rassembler à l’extérieur ou dans des espaces bien aérés (comme les cours arrière ou les parcs)</li>
        </ul>

        <h4>Couvre-visages et masques</h4>
        <ul>
          <li>
            utilisez-en un lorsque vous ne pouvez pas garder une distance d’au moins 2 mètres (6 pieds) avec des personnes qui ne
            font pas partie de votre cercle social {" "}
          </li>
          <li>utilisez-en un dans les petits espaces, dans les magasins ou dans le transport en commun</li>
          <li>couvrez votre bouche et votre nez</li>
          <li>
            <strong>ne le touchez pas</strong> sans d’abord vous laver ou désinfecter les mains
          </li>
          <li>
            <a href="https://www.ontario.ca/fr/page/couvre-visage-et-masques-faciaux" target="_blank" rel="noopener">
              apprenez à porter un couvre-visage ou un masque
            </a>
          </li>
        </ul>

        <h4>Boutiques et magasins</h4>
        <ul>
          <li>
            dans la mesure du possible, utilisez le service de cueillette en bordure du trottoir ou faites livrer les
            articles
          </li>
          <li>portez un couvre-visage ou un masque si vous vous rendez dans un magasin de détail ou une épicerie</li>
          <li>gardez une distance d’au moins 2 mètres (6 pieds) avec les personnes qui ne font pas partie de votre cercle social</li>
        </ul>

        <h4>Travail et lieux de travail</h4>
        <ul>
          <li>travaillez de la maison ou réduisez le nombre de jours où vous êtes au travail en personne (si possible)</li>
          <li>
            si vous ne pouvez pas travailler de la maison, assurez-vous que vous et votre entreprise prenez les mesures
            de précaution adéquates pour éviter la propagation du virus
          </li>
          <li>discutez avec votre gestionnaire et votre délégué à la santé et à la sécurité au travail</li>
        </ul>

        <h4>Promenades, exercices physiques, parcs et places</h4>
        <ul>
          <li>vous pouvez vous promener, courir ou faire du vélo</li>
          <li>vous pouvez sortir le chien et faire des pique-niques et barbecues </li>
          <li>gardez une distance d’au moins 2 mètres (6 pieds) avec les personnes qui ne font pas partie de votre cercle social</li>
        </ul>

        <div className="ontario-margin-top-32-!">
          <p>Renseignez-vous sur :</p>
          <ul>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#distanciation-physique"
                target="_blank"
                rel="noopener"
              >
                la distanciation physique
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/fr/page/freinez-la-propagation-de-la-covid-19#section-1"
                target="_blank"
                rel="noopener"
              >
                la façon de réduire votre exposition au virus
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="monitor-your-health">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print">2.</span> Quand passer un test de diagnostic de la COVID-19
        </h3>
        <p className="ontario-first-line">
          Faites attention à votre santé et portez attention à tout changement de votre état de santé.
        </p>

        <p>Présentez-vous dans un centre d’évaluation pour un test de dépistage de COVID-19 si vous :</p>
        <ul>
          <li>commencez à vous sentir malade</li>
          <li>êtes en contact physique étroit avec une personne qui présente des symptômes</li>
          <li>croyez que vous avez besoin de subir un test, même si vous ne présentez pas de symptômes </li>
          <li>avez besoin d'un test pour visiter une maison de soins  infirmiers ou un foyer de soins de longue durée</li>
        </ul>

        <h4>Colocataires et membres de la famille avec qui vous habitez</h4>
        <ul>
          <li>ils doivent porter attention à tout changement de leur état de santé également</li>
          <li>
            les jeunes enfants pourraient présenter des symptômes moins précis, par exemple de la léthargie ou un manque
            d’appétit
          </li>
        </ul>
      </div>
    </div>
  </>
))

const R3 = () => {
  const elToPrintRef = useRef(null)

  return (
    <ResultsTemplate lang={lang} showContactForm={false} elToPrintRef={elToPrintRef}>
      <ResultsContent ref={elToPrintRef} lang={lang} />
    </ResultsTemplate>
  )
}

export default R3
