import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageDreamers(state = {
  aspirations: [],
}, action) {


  switch (action.type) {
    case 'ADD_ASPIRATION':
    console.log("test", action)

    const aspiration = {
      title: action.title,
      category: action.category,
      timeframe: action.timeframe,
      status: action.status,
      id: uuid()
    };

    return {
      ...state, aspirations: [...state.aspirations, aspiration]
    }

    case 'DELETE_ASPIRATION':

    const aspirations = state.aspirations.filter(aspiration => aspiration.id !== action.id);

    return {...state, aspirations}

    default:
      return state
  }
}
