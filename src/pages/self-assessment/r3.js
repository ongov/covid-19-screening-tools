import React, {forwardRef, useRef} from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import ResultsTemplate from "../../templates/results-template"
import SaveToPDFButton from "../../components/save-to-pdf-button";

const lang = "en"

const ResultsContent = forwardRef(({ lang }, ref) => (
  <>
    <div className="ontario-row">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-icon__self-isolate"></div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns ontario-results__content">
        <h2>
          Based on your answers, you do not seem to have symptoms or be part of an at-risk group. We recommend that you{" "}
          <strong>be cautious when outside and keep a distance from others as much as possible.</strong>
        </h2>

        <div className="ontario-margin-top-40-! ontario-hide-for-print">
          <SaveToPDFButton ref={ref} lang={lang} />
        </div>

        <div className="ontario-hide-for-print">
          <p>On this page:</p>
          <ol>
            <li>
              <AnchorLink to="/self-assessment/r3#healthy-tips">Tips to stay healthy</AnchorLink>
            </li>
            <li>
              <AnchorLink to="/self-assessment/r3#covid-test">When to get a COVID-19 test </AnchorLink>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="healthy-tips">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">1.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">1.</span> Tips to stay healthy
        </h3>

        <h4>Physical distancing and hand washing</h4>
        <ul>
          <li>keep a distance of at least 6 feet (2 metres) from people who are not in your social circle</li>
          <li>wash or sanitize your hands often </li>
        </ul>

        <h4>Social circles</h4>
        <ul>
          <li>choose up to 10 people to form a circle with (including people you live with)</li>
          <li>the 10 of you can interact without physical distancing (like giving hugs, being closer than 2 metres)</li>
          <li>you or others in your circle <strong>cannot</strong> be in more than 1 circle</li>
          <li><a href="https://www.ontario.ca/page/create-social-circle-during-covid-19" target="_blank" rel="noopener">learn how to create a social circle{" "}
          <span className="ontario-show-for-sr">This link will open in a new window.</span></a></li>
        </ul>

        <h4>10-person social gatherings</h4>
        <ul>
          <li>you can have gatherings with up to 10 people outside your social circle</li>
          <li><strong>you must</strong> keep a distance of at least 6 feet (2 metres) from each other</li>
          <li>try to meet outside or in well-ventilated spaces (like backyards or parks)</li>
        </ul>

        <h4>Face coverings and masks</h4>
        <ul>
          <li>use one when you cannot keep a distance of at least 6 feet (2 metres) from people who are not in your social circle </li>
          <li>use in small spaces, stores, or on public transit </li>
          <li>cover both your mouth and nose</li>
          <li>
            <strong>do not</strong> touch it without washing or sanitizing your hands first
          </li>
          <li>
            <a href="https://www.ontario.ca/page/face-coverings-and-face-masks" target="_blank" rel="noopener">
              learn how to wear and use face coverings and masks{" "}
              <span className="ontario-show-for-sr">This link will open in a new window.</span>
            </a>
          </li>
        </ul>

        <h4>Shops and stores</h4>
        <ul>
          <li>use curbside pickup or get items delivered as much as you can</li>
          <li>wear a face covering or mask if you go into retail or grocery stores</li>
          <li>keep a distance of at least 6 feet (2 metres) from people who are not in your social circle</li>
        </ul>

        <h4>Work and workspaces</h4>
        <ul>
          <li>work from home or reduce the number of days you are at work in person (if possible)</li>
          <li>
            if you cannot work from home, make sure you and your company are taking the right safety precautions to
            avoid the spread of the virus
          </li>
          <li>discuss with your manager and occupational health and safety representative </li>
        </ul>

        <h4>Walks, exercise, parks, and squares</h4>
        <ul>
          <li>you can go on walks, runs, and bike rides</li>
          <li>you can take the dog out and have picnics and barbeques</li>
          <li> keep a distance of at least 6 feet (2 metres) from people who are not in your social circle</li>
        </ul>


        <div className="ontario-margin-top-32-!">
          Learn more about:
          <ul>
            <li>
              {" "}
              <a
                href="https://www.ontario.ca/page/covid-19-stop-spread#physical-distancing"
                rel="noopener"
                target="_blank"
              >
                physical distancing <span className="ontario-show-for-sr">This link will open in a new window.</span>
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://www.ontario.ca/page/covid-19-stop-spread#section-1" rel="noopener" target="_blank">
                reducing your exposure to the virus{" "}
                <span className="ontario-show-for-sr">This link will open in a new window.</span>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="ontario-row ontario-hide-for-print">
      <div className="ontario-small-12 ontario-columns">
        <hr className="ontario-hr-short" aria-hidden="true" />
      </div>
    </div>

    <div className="ontario-row ontario-results__content" id="covid-test">
      <div className="ontario-small-1 ontario-medium-1 ontario-large-1 ontario-columns ontario-hide-for-print">
        <div className="ontario-infographic-number">2.</div>
      </div>
      <div className="ontario-small-10 ontario-medium-11 ontario-large-10 ontario-end ontario-columns">
        <h3>
          <span className="ontario-show-for-print ontario-infographic-number">2.</span> When to get a COVID-19 test
        </h3>
        <p className="ontario-first-line">
          Pay attention to your health and note if anything changes.
        </p>

        <p>Visit an assessment centre for a COVID-19 test if you:</p>
        <ul>
          <li>start feeling sick</li>
          <li>come into close physical contact with someone who has symptoms</li>
          <li>feel like you need a test, even if you do not have symptoms</li>
          <li>need one to visit a nursing or long-term care home </li>
        </ul>

        <h4>Roommates and family you live with</h4>
        <ul>
          <li>they should note any changes to their health too</li>
          <li>young children might have less specific symptoms like sluggishness or lack of appetite </li>
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
