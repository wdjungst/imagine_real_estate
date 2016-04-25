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
  }

  componentWillMount() {
    if (!this.props.auth && sessionStorage.token)
      this.props.dispatch(loggedIn(sessionStorage.userId, sessionStorage.token))
  }

  handleLogin() {
    if (this.props.auth) {
      this.props.dispatch(logout())
      this.props.history.push('/')
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    let dashboard = () => {
      if (this.props.auth) {
        return(<NavItem><a className={yellow} href="/dashboard">Dashboard</a></NavItem>)
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
              <Link to="/" className="brand-logo">
                <img src={whiteLogo} className={smallLogo} />
              </Link>
              <ul id="nav-mobile" className={`right hide-on-med-and-down`}>
                <NavItem><a href="tel:801-205-7000">(801) 205-7000</a></NavItem>
                <NavItem><IndexLink className={yellow} to="/">Home</IndexLink></NavItem>
                <NavItem><Link className={yellow} to="/search_homes">Search Homes</Link></NavItem>
                <NavItem><Link className={yellow} to="/agents">Find An Agent</Link></NavItem>
                {dashboard()}
                <NavItem onClick={this.handleLogin}><i className="fa fa-gear"></i></NavItem>
              </ul>
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
