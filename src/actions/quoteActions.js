

export const fetchQuotes = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOAD_ASPIRATIONS'})

    fetch('http://localhost:3001/quotes').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'LOAD_QUOTES', quotes: responseJSON.data })
    })
    .catch(error => console.log(error));
  }
}

const addQuote = (quote) => {
  return {type: 'ADD_QUOTE', payload: quote}
}

export const createQuote = (quote) => {
  return dispatch => {
    return fetch('http://localhost:3001/quotes', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quote})
    })
    .then(response => response.json())
    .then(quote => {

      dispatch(addQuote(quote))
    })
    .catch(error => {
      dispatch({type: 'CREATE_QUOTE', payload: error })
    })
  }
}


export const deleteQuotes = (quote) => {

    return dispatch => {
      return fetch(`http://localhost:3001/quotes/${quote.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        // history.push('/aspirations')
        console.log(data)
        dispatch({type: 'DELETE_QUOTE', payload: quote.id })
      })

    }
  }
