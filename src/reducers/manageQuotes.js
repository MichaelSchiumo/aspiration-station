// import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageAspirations(state = [], action) {


  switch (action.type) {
    case 'ADD_QUOTE':

    {
  
    console.log(action)
    return [
      ...state,
      action.payload.quote

    ]
}


    case 'DELETE_QUOTE':

    const quotes = state.filter(quote => quote.id !== action.payload);

    return quotes




    case 'LOAD_QUOTES':

    return [
      ...action.quotes.reduce((newObj, eleObj) => {
        const quote = {
          id: eleObj.id,
          author: eleObj.attributes.author,
          content: eleObj.attributes.content

        }
        newObj.push(quote)
        return newObj
      }, [])
    ]

    //add user - structure needs to match on both sides

    default:
      return state
  }
}
