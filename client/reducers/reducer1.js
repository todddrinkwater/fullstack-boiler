const reducer1 = (state = null, action) => {
  switch (action.type) {
    case 'STATEMENT':
      return action.something

    default:
      return state
  }
}

export default user
