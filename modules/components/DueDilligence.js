import React from 'react'
import { sideLink } from './styles.css'
import $ from 'jquery'
import Service from './Service'

class DueDilligence extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      home_inspections: [],
      home_warranties: [],
      mold: [],
      radon: [],
      lead_based_paint: [],
      asbestos: [],
      eifs_stucco: [],
      earthquake_information: [],
      methamphetamine: [],
      hazardous_waste: [],
      duct_cleaning: [],
      flood_zones: [],
      environmental_report: [],
      exchangers: [],
      title_companies: [],
      commercial_property: [],
      education: []
    }
  }

  componentWillMount() {
    $.ajax({
      url: '/api/services',
      type: 'GET'
    }).done( services => {
      this.setState({
        home_inspections: services.filter( service => service.category == 'home_inspections' ),
        home_warranties: services.filter( service => service.category == 'home_warranties' ),
        mold: services.filter( service => service.category == 'mold' ),
        radon: services.filter( service => service.category == 'radon' ),
        lead_based_paint: services.filter( service => service.category == 'lead_based_paint' ),
        asbestos: services.filter( service => service.category == 'asbestos' ),
        eifs_stucco: services.filter( service => service.category == 'eifs_stucco' ),
        earthquake_information: services.filter( service => service.category == 'earthquake_information' ),
        methamphetamine: services.filter( service => service.category == 'methamphetamine' ),
        hazardous_waste: services.filter( service => service.category == 'hazardous_waste' ),
        duct_cleaning: services.filter( service => service.category == 'duct_cleaning' ),
        flood_zones: services.filter( service => service.category == 'flood_zones' ),
        environmental_report: services.filter( service => service.category == 'environmental_report' ),
        exchangers: services.filter( service => service.category == '1031_exchangers' ),
        title_companies: services.filter( service => service.category == 'title_companies' ),
        commercial_property: services.filter( service => service.category == 'commercial_property' ),
        education: services.filter( service => service.category == 'education' )
      })
    })
  }

  render() {
    let home_inspections = this.state.home_inspections.map( service => { return(<Service key={service._id} {...service} />) })
    let home_warranties = this.state.home_warranties.map( service => { return(<Service key={service._id} {...service} />) })
    let mold = this.state.mold.map( service => { return(<Service key={service._id} {...service} />) })
    let radon = this.state.radon.map( service => { return(<Service key={service._id} {...service} />) })
    let lead_based_paint = this.state.lead_based_paint.map( service => { return(<Service key={service._id} {...service} />) })
    let asbestos = this.state.asbestos.map( service => { return(<Service key={service._id} {...service} />) })
    let eifs_stucco = this.state.eifs_stucco.map( service => { return(<Service key={service._id} {...service} />) })
    let earthquake_information = this.state.earthquake_information.map( service => { return(<Service key={service._id} {...service} />) })
    let methamphetamine = this.state.methamphetamine.map( service => { return(<Service key={service._id} {...service} />) })
    let hazardous_waste = this.state.hazardous_waste.map( service => { return(<Service key={service._id} {...service} />) })
    let duct_cleaning = this.state.duct_cleaning.map( service => { return(<Service key={service._id} {...service} />) })
    let flood_zones = this.state.flood_zones.map( service => { return(<Service key={service._id} {...service} />) })
    let environmental_report = this.state.environmental_report.map( service => { return(<Service key={service._id} {...service} />) })
    let exchangers = this.state.exchangers.map( service => { return(<Service key={service._id} {...service} />) })
    let title_companies = this.state.title_companies.map( service => { return(<Service key={service._id} {...service} />) })
    let commercial_property = this.state.commercial_property.map( service => { return(<Service key={service._id} {...service} />) })
    let education = this.state.education.map( service => { return(<Service key={service._id} {...service} />) })
    return(
      <div className="row">
        <div className={`grey darken-3 col s12 m2 center ${sideLink}`}>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#inspections">Home Inspections</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#warranties">Home Warranties</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#mold">Mold</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#radon">Radon</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#lead_based_paint">Lead Based Paint</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#asbestos">Asbestos</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#eifs_stucco">Eifs Stucco</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#earthquake_information">Earthquake Information</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#methamphetamine">Methamphetamine</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#hazardous_waste">Hazardous Waste</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#duct_cleaning">Duct Cleaning</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#flood_zones">Flood Zones</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#enviromental_report">enviromental_report</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#exchangers">1031 Exchangers</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#title_companies">Title Companies</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#commercial_property">Commercial Property</a>
          <br/>
          <br/>
          <a className={`white-text ${sideLink}`} href="#education">Education</a>
          <br/>
          <br/>
        </div>
        <div className="col s12 m10">
          <div className="row">
            <div id="inspections" className="col s12 center">
              <h3>Home Inspections</h3>
              <ul className="center">
                {home_inspections}
              </ul>
            </div>
            <div id="warranties" className="col s12 center">
              <h3>Home Warranties</h3>
              <ul className="center">
                {home_warranties}
              </ul>
            </div>
            <div id="mold" className="col s12 center">
              <h3>Mold</h3>
              <ul className="center">
                {mold}
              </ul>
            </div>
            <div id="radon" className="col s12 center">
              <h3>Radon</h3>
              <ul className="center">
                {radon}
              </ul>
            </div>
            <div id="lead_based_paint" className="col s12 center">
              <h3>Lead Based Paint</h3>
              <ul className="center">
                {lead_based_paint}
              </ul>
            </div>
            <div id="asbestos" className="col s12 center">
              <h3>Asbestos</h3>
              <ul className="center">
                {asbestos}
              </ul>
            </div>
            <div id="eifs_stucco" className="col s12 center">
              <h3>Eifs Stucco</h3>
              <ul className="center">
                {eifs_stucco}
              </ul>
            </div>
            <div id="earthquake_information" className="col s12 center">
              <h3>Earthquake Information</h3>
              <ul className="center">
                {earthquake_information}
              </ul>
            </div>
            <div id="methamphetamine" className="col s12 center">
              <h3>Methamphetamine</h3>
              <ul className="center">
                {methamphetamine}
              </ul>
            </div>
            <div id="hazardous_waste" className="col s12 center">
              <h3>Hazardous Waste</h3>
              <ul className="center">
                {hazardous_waste}
              </ul>
            </div>
            <div id="duct_cleaning" className="col s12 center">
              <h3>Duct Cleaning</h3>
              <ul className="center">
                {duct_cleaning}
              </ul>
            </div>
            <div id="flood_zones" className="col s12 center">
              <h3>Flood Zones</h3>
              <ul className="center">
                {flood_zones}
              </ul>
            </div>
            <div id="enviromental_report" className="col s12 center">
              <h3>Environmental Report</h3>
              <ul className="center">
                {environmental_report}
              </ul>
            </div>
            <div id="exchangers" className="col s12 center">
              <h3>1031 Exchangers</h3>
              <ul className="center">
                {exchangers}
              </ul>
            </div>
            <div id="title_companies" className="col s12 center">
              <h3>Title Companies</h3>
              <ul className="center">
                {title_companies}
              </ul>
            </div>
            <div id="commercial_property" className="col s12 center">
              <h3>Commercial Property</h3>
              <ul className="center">
                {commercial_property}
              </ul>
            </div>
            <div id="education" className="col s12 center">
              <h3>Education</h3>
              <ul className="center">
                {education}
              </ul>
            </div>
            <h3>Disclaimer</h3>
            <p>All information provided on this web page is for informational purposes only. It is not represented to be error free and is provided as a courtesy only. Imagine Real Estate does not endorse any particular business or organization appearing on or linked to this web page. Nothing contained herein constitutes, nor is intended to constitute, an offer, inducement, promise, or contract of any kind. By using information on this web page or any links related thereto, you hereby agree to hold harmless Imagine Real Estate, Inc. for any liability arising from or in connection with such use.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DueDilligence
