import React from "react"
import styled from "styled-components"

import OutcomeTemplate from "../../templates/outcome-template"

import LargeCheckmark from "../../images/inline-svgs/ontario-icon-checkmark-large.inline.svg"
import SmallCheckmark from "../../images/inline-svgs/ontario-icon-checkmark-small.inline.svg"
import Calendar from "../../images/inline-svgs/ontario-icon-calendar.inline.svg"
import MapPin from "../../images/inline-svgs/ontario-icon-map-pin.inline.svg"
import Information from "../../images/inline-svgs/ontario-icon-information.inline.svg"
import StaySafe from "../../images/inline-svgs/ontario-icon-stay-safe.inline.svg"
import OntarioLogo from "../../images/ontario@2x-print.png"

const Green = "#118847"
const White = "#fff"

const HeadingCheckmark = styled(LargeCheckmark)`
  display: inline-block;
  margin: 2rem calc(50% - (143px / 2));
  background-color: ${Green};
`

const Heading = styled.div`
  display: block;
  width: 100%;
  margin-top: -2rem;
  background-color: ${Green};

  @media screen and (max-width: 39.9375em) {
    margin-top: -1rem;
  }
`

const OutcomeTitle = styled.p`
  margin: 0;
  padding: 1.5rem;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.48px;
  color: #d1efd4;
`

const OutcomeHeading = styled.h1`
  margin: 0;
  padding: 1.5rem 0;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.14px;
  color: #ffffff;
`

const OutcomeContentBlock = styled.div`
  position: relative;
  margin: 2rem 0;

  .icon {
    position: absolute;
    top: 0.25rem;
    left: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.4;
    margin: 1rem 2rem 0 5.5rem;
  }

  p {
    margin: 0.25rem 2rem 1rem 5.5rem;
  }
`

const Footer = styled.div`
  position: relative;
  border-bottom: 8px solid ${Green};
  width: 100%;
`

const FooterCheckmark = styled(SmallCheckmark)`
  display: inline-block;
  position: absolute;
  left: 1.5rem;
  bottom: 2.5rem;
  background-color: ${White};
`

const FooterLogoWidth = "7rem"
const FooterLogo = styled.img`
  width: ${FooterLogoWidth};
  margin: 2rem calc(50% - (${FooterLogoWidth} / 2));
`

const Approved = () => (
  <OutcomeTemplate lang="en">
    <Heading>
      <OutcomeTitle>
        Windsor Courthouse
        <br />
        COVID-19 screening result
      </OutcomeTitle>
      <OutcomeHeading>Approved</OutcomeHeading>
      <HeadingCheckmark />
    </Heading>
    <OutcomeContentBlock>
      <Calendar className="icon" />
      <h3>July 6th, 2020</h3>
      <p>valid from 9:50 a.m. to 11:59 p.m</p>
    </OutcomeContentBlock>
    <OutcomeContentBlock>
      <MapPin className="icon" />
      <h3>You can enter</h3>
      <p>
        Windsor Courthouse
        <br />
        245 Windsor Ave
        <br />
        Windsor Ontario
        <br />
        N9A 1J2
      </p>
    </OutcomeContentBlock>
    <OutcomeContentBlock>
      <Information className="icon" />
      <h3>Next steps</h3>
      <p>Show this result to courthouse security either on your phone or download a PDF to print out.</p>
      <p>Retake this screening every day before you enter a courthouse.</p>
    </OutcomeContentBlock>
    <OutcomeContentBlock>
      <StaySafe className="icon" />
      <h3>Stay safe</h3>
      <p>
        Download the Covid Alert app to get anonymous notifications if someone you were around tests positive for
        COVID-19.
      </p>
    </OutcomeContentBlock>
    <Footer>
      <FooterCheckmark />
      <FooterLogo src={OntarioLogo} alt="Ontario Logo" />
    </Footer>
  </OutcomeTemplate>
)

export default Approved
