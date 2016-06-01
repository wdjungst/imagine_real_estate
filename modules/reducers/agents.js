const agents = ( state = {}, action ) => {
  switch (action.type) {
    case 'SET_AGENT':
      return { ...action.agent }
    default:
      return state
  }
}

export default agents
