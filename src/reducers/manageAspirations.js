import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageDreamers(state = {
  aspirations: [],
}, action) {


  switch (action.type) {
    case 'ADD_ASPIRATION':
    console.log('add aspiration')
    return {
      ...state, aspirations: [...state.aspirations, action.payload]
    }

    case 'DELETE_ASPIRATION':

    const aspirations = state.aspirations.filter(aspiration => aspiration.id !== action.id);

    return {...state, aspirations}

    case 'LOAD_ASPIRATIONS':

    return { aspirations: action.aspirations }

    default:
      return state
  }
}
