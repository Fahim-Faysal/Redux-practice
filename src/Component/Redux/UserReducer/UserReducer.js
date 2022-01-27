const initialstate = {
      name: 'Fahim Faysal siyam',
      user: [],
      count: 0,
      info: {}
}


const userReducer = (state = initialstate, action) => {
      switch (action.type) {
            case "ADD": {
                  const num = action.payload
                  return {
                        ...state,
                        count: state.count + num
                  }
            }
            case "MINUS": {
                  return {
                        ...state,
                        count: state.count - 1
                  }
            }
            case 'USER': {
                  return {
                        ...state,
                        user: action.payload
                  }
            }
            case 'FORM': {
                  return {
                        ...state,
                        info: action.payload
                  }
            }
            default: {
                  return state
            }
      }
}

export default userReducer