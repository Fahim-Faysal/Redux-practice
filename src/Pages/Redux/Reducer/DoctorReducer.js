import doctor from '../../Fakedata/Doctor.json'

const initialstate = {
      alldoctor: doctor,
      singleDoctor: [],
      addnumber: []
}

let num = 0
// let num = action.payload;
const doctorReducer = (state = initialstate, action) => {
      switch (action.type) {
            case 'doctor name': {
                  const newState = { ...state, singleDoctor: [...state.singleDoctor, action.payload] }
                  return newState
            }
            case 'add': {
                  num += 1;
                  const newState = { ...state, addnumber: [...state.addnumber, action.payload = num] }
                  return newState
            }
            default: {
                  return state
            }
      }
}

export default doctorReducer