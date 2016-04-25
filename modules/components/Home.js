import React from 'react'
import Title from 'react-title-component'
import  styles from './styles.css'
import logo from './logo.png'
import IconPanel from './IconPanel'
import AboutPanel from './AboutPanel'
import JoinPanel from './JoinPanel'
import FooterPanel from './FooterPanel'

export default React.createClass({
  render() {
    return (
      <div>
        <Title render={prev => `${prev} | Home`}/>
        <div className={styles.bg}>
          <div className="center">
            <img className={`${styles.lgLogo} responsive-img`} src={logo} />
          </div>
          <IconPanel />
        </div>
        <AboutPanel />
        <JoinPanel />
        <FooterPanel />
      </div>
    )
  }
})

