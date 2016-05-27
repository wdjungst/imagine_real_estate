import React, { Component } from 'react'
import styles from './styles.css'
import { Link } from 'react-router'

class FooterPanel extends Component {
  render() {
    return(
      <div className={styles.greyBg}>
        <footer className={`${styles.greyBg} page-footer`}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Imagine Real Estate</h5>
                <p className="grey-text text-lighten-4"><a href="tel:801-205-7000">801-205-7000</a></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><Link to="search_homes" className="grey-text text-lighten-3" href="#!">Search Homes</Link></li>
                  <li><Link to="agents" className="grey-text text-lighten-3" href="#!">Find an Agent</Link></li>
                  <li><Link to="due_dilligence" className="grey-text text-lighten-3" href="#!">Due Dillegence</Link></li>
                  <li><Link to="contact" className="grey-text text-lighten-3" href="#!">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <span className="white-text">Licensed to do business in the state of Utah</span>
            <br />
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright Imagine Real Estate
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default FooterPanel
