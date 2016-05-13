import '../modules/styles.css'
import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { ServerRoute, lazy } from 'react-project'

import App from './components/App'
import Home from './components/Home'
import ContactImagine from './components/contact/ContactImagine'
import NoMatch from './components/NoMatch'
import loadSearch from 'bundle?lazy!./components/Search'
import Dashboard from './components/admin/Dashboard'
import Agent from './components/agents/Agent'
import Agents from './components/agents/Agents'
import DueDilligence from './components/DueDilligence'
import SignIn from './components/auth/SignIn'
import { signIn, signUp } from './api/auth'
import { addService, getServices, deleteService, updateService } from './api/services'
import { sendContact } from './api/contact'
import { addAgent, getAgents, getAgent, deleteAgent, updateAgent } from './api/agents'
import SignUp from './components/auth/SignUp'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { push } from 'react-router-redux'

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth,
  predicate: auth => auth.isAuthenticated,
  redirectAction: push,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="dashboard" component={UserIsAuthenticated(Dashboard)}/>
      <Route path="agents" component={Agents} />
      <Route path="agents/:name" component={Agent} />
      <Route path="search_homes" getComponent={lazy(loadSearch)}/>
      <Route path="due_dilligence" component={DueDilligence} />
      <Route path="contact" component={ContactImagine} />
      <Route path="signup/IV4HLiqA5OXU9VNTcp6" component={SignUp} />
      <Route path="login" component={SignIn} />
    </Route>
    <ServerRoute path="/api">
      <ServerRoute path="services" get={getServices} post={addService} >
        <ServerRoute path=":id" delete={deleteService} patch={updateService} />
      </ServerRoute>
      <ServerRoute path="contact" post={sendContact} />
      <ServerRoute path="auth">
        <ServerRoute path="signup" post={signUp} />
        <ServerRoute path="signin" post={signIn} />
      </ServerRoute>
      <ServerRoute path="agents" post={addAgent} get={getAgents}>
        <ServerRoute path=":url" get={getAgent} delete={deleteAgent} patch={updateAgent}/>
      </ServerRoute>
    </ServerRoute>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
