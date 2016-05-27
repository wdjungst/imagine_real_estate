import React from 'react'
import { IndexLink, Link } from 'react-router'
import Title from 'react-title-component'
import { NavItem } from 'react-materialize'
import { blueBg, yellow, smallLogo } from './styles.css'
import whiteLogo from './whiteLogo.png'
import { logout, loggedIn } from './actions'
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.showLogo = this.showLogo.bind(this)
  }

  componentWillMount() {
    if (!this.props.auth && sessionStorage.token)
      this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
  }

  componentDidMount() {
    window.$('.button-collapse').sideNav({ closeOnClick: true })
  }

  handleLogin() {
    if (this.props.auth) {
      this.props.dispatch(logout())
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }
  }

  showLogo() {
    if (this.props.location.pathname === "/")
        return null
    else {
      return(
        <Link to="/" className="brand-logo">
          <img src={whiteLogo} className={smallLogo} />
        </Link>
      )
    }
  }

  render() {
    let dashboard = () => {
      if (this.props.auth) {
        return(<NavItem className="hide-on-med-and-down"><a className={yellow} href="/dashboard">Dashboard</a></NavItem>)
      } else {
        return null
      }
    }

    return(
      <div>
        <Title render="Imagine"/>
        <div className="navbar-fixed">
          <nav>
            <div className={`${blueBg} nav-wrapper`}>
              {this.showLogo()}
              <ul id="nav-mobile" className={`right hide-on-med-and-down`}>
                <NavItem><a href="tel:801-205-7000">(801) 205-7000</a></NavItem>
                <NavItem><IndexLink className={yellow} to="/">Home</IndexLink></NavItem>
                <NavItem><Link className={yellow} to="/search_homes">Search Homes</Link></NavItem>
                <NavItem><Link className={yellow} to="/agents">Find An Agent</Link></NavItem>
                {dashboard()}
                <NavItem onClick={this.handleLogin}><i className="fa fa-gear"></i></NavItem>
              </ul>
              <ul id="slide-out" className={`side-nav blue`}>
                <NavItem><a className={yellow} href="tel:801-205-7000">(801) 205-7000</a></NavItem>
                <NavItem><IndexLink className={yellow} to="/">Home</IndexLink></NavItem>
                <NavItem><Link className={yellow} to="/search_homes">Search Homes</Link></NavItem>
                <NavItem><Link className={yellow} to="/agents">Find An Agent</Link></NavItem>
                {dashboard()}
                <NavItem onClick={this.handleLogin}><i className={`fa fa-gear ${yellow}`}></i></NavItem>
              </ul>
              <a href="#" data-activates="slide-out" className="button-collapse">
                <i className="material-icons">menu</i>
              </a>
            </div>
          </nav>
        </div>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(App)
