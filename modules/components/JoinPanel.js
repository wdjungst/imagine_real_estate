import React, { Component } from 'react'
import styles from './styles.css'
import { Row, Col } from 'react-materialize'
import ContactForm from './contact/ContactForm'

import ablue from './images/i_aquaBlue1.jpg'
import fEngine from './images/i_fireEngine.jpg'
import lilac from './images/i_lilac.jpg'
import red from './images/i_red.jpg'
import aBlue2 from './images/i_aquaBlue2.jpg'
import fucia from './images/i_fucia.jpg'
import lGreen from './images/i_limeGreen.jpg'
import sand from './images/i_sand.jpg'
import beige from './images/i_beige.jpg'
import gold from './images/i_gold.jpg'
import oGreen from './images/i_oliveGreen.jpg'
import sand2 from './images/i_sand2.jpg'
import black from './images/i_black.jpg'
import golden from './images/i_golden.jpg'
import oGreen2 from './images/i_oliveGreen2.jpg'
import seafoam from './images/i_seafoam.jpg'
import bRed from './images/i_brightRed.jpg'
import green from './images/i_green.jpg'
import orange from './images/i_orange.jpg'
import seafoam1 from './images/i_seafoam1.jpg'
import brown from './images/i_brown.jpg'
import green1 from './images/i_green1.jpg'
import orange1 from './images/i_orange1.jpg'
import silver from './images/i_silver.jpg'
import burgiundy from './images/i_burgiundy.jpg'
import grey1 from './images/i_grey1.jpg'
import orange3 from './images/i_orange3.jpg'
import sBlue from './images/i_skyBlue.jpg'
import burgundy from './images/i_burgundy.jpg'
import grey2 from './images/i_grey2.jpg'
import pink from './images/i_pink.jpg'
import sBlue2 from './images/i_skyBlue2.jpg'
import dPurple from './images/i_darkPurple.jpg'
import hPink from './images/i_hotPink.jpg'
import pink1 from './images/i_pink1.jpg'
import sBeige from './images/i_softBeige.jpg'
import dYellow from './images/i_darkYellow.jpg'
import khakii1 from './images/i_khakii1.jpg'
import pink2 from './images/i_pink2.jpg'
import sPhink from './images/i_softPink.jpg'
import dGrey from './images/i_darkestGrey.jpg'
import lavender from './images/i_lavender.jpg'
import plum from './images/i_plum.jpg'
import spartan from './images/i_spartan.jpg'
import dBlue from './images/i_denimBlue.jpg'
import lHGreen from './images/i_lightHunterGreen.jpg'
import pumpkin from './images/i_pumpkin.jpg'
import yellow from './images/i_yellow.jpg'

class JoinPanel extends Component {
  componentDidMount() {
    window.$('.collapsible').collapsible()
    window.$('.carousel').carousel()
  }

  render() {
    let colors = [
      ablue,
      fEngine,
      lilac,
      red,
      aBlue2,
      fucia,
      lGreen,
      sand,
      beige,
      gold,
      oGreen,
      sand2,
      black,
      golden,
      oGreen2,
      seafoam,
      bRed,
      green,
      orange,
      seafoam1,
      brown,
      green1,
      orange1,
      silver,
      burgiundy,
      grey1,
      orange3,
      sBlue,
      burgundy,
      grey2,
      pink,
      sBlue2,
      dPurple,
      hPink,
      pink1,
      sBeige,
      dYellow,
      khakii1,
      pink2,
      sPhink,
      dGrey,
      lavender,
      plum,
      spartan,
      dBlue,
      lHGreen,
      pumpkin,
      yellow
    ]
    let count = 0
    let slides = colors.map( color => {
      count++
      return(
        <a key={`car-${count}`} className="carousel-item">
          <img src={color} style={{ cursor: 'pointer' }}/>
        </a>
      )
    })
    return(
      <div id="careers" className={styles.blueBg}>
        <div className="center-align">
          <h1 className="white-text">Join Our Team</h1>
        </div>
        <div style={{ padding: '0px 20px 0px 20px' }}>
          <Row>
            <Col s={12} m={6}>
              <h5 className="white-text center">Get more info on becoming an agent</h5>
              <ContactForm email="janet@imagineutah.com" whiteText={true} />
            </Col>
            <Col s={12} m={5} offset={'m1'}>
              <h5 className={`${styles.bottom} white-text center`}>Why agents love us</h5>
              <div>
                <ul className="collapsible" data-collapsible="accordion">
                  <li>
                    <div className={`collapsible-header blue darken-3 ${styles.yellow}`}><i className={`fa fa-support ${styles.yellow} ${styles.iconSm}`}></i>Great Support</div>
                    <div className="collapsible-body white-text">
                      <p>At IMAGINE, serving the Individual is our #1 PRIORITY and we are available to ASSIST at ANYTIME!!  With over 50 years of combined experience in the industry, the IMAGINE Management team understands the importance of knowing each agent and are COMMITTED to helping them succeed!   Our logo is a reminder of that commitment–the colors are fixed with the exception of the i, which is just as individual as each of our agents and their business.<br/><br/>So what color is your i?  It can be whatever you IMAGINE!   Join us and choose a color that inspires and motivates you to exceed beyond your own expectations! </p>
                    </div>
                  </li>
                  <li>
                    <div className={`collapsible-header blue darken-3 ${styles.yellow}`}><i className={`fa fa-dollar ${styles.yellow} ${styles.iconSm}`}></i>Great Commissions</div>
                    <div className="collapsible-body white-text">
                      <p>Looking for a company with Great Commission Splits and Great Service?  Well, you’ve found it!<br/><br/> At IMAGINE Real Estate you will enjoy a beautiful office environment, lower overall fees, the flexibility to run your business the way you choose and full service-- which includes 24/7 access to broker and staff!  It’s a Win-Win!<br/><br/>Call today and IMAGINE the possibilities of becoming part of our team!<br/><br/>$490 Transaction Fee<br/>$32 E/O Fee<br/><br/>No Monthly Fees<br/>No Splits<br/>No hidden charges<br/><br/>Recruiting Commission Paid for Every Agent You Recruit!</p>
                    </div>
                  </li>
                  <li>
                    <div className={`collapsible-header blue darken-3 ${styles.yellow}`}><i className={`fa fa-info ${styles.yellow} ${styles.iconSm}`}></i>What Color is Your i?</div>
                    <div className="collapsible-body white-text">
                      <p>At Imagine you are not a number or a transaction–we care about you and helping you be successful is our #1 priority!  Our logo represents that commitment–the colors are fixed with the exception of the i, which is just as individual as you and your business! So, what color is your i?  It can be whatever you IMAGINE!  YOU choose-- YOU decide!  We hope that your i will become your own brand and that every time you see it, you will be motivated to exceed beyond your own expectations.  Take that concept to your clients and make a commitment of personalized, unique service that only YOU can provide!</p>
                    </div>
                  </li>
                </ul>
                <h3 className="center white-text">Choose Your i</h3>
                <div className="carousel" style={{ height: '200px'}}>
                  {slides}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default JoinPanel
