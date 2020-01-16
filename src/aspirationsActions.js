

export const fetchAspirations = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOAD_ASPIRATIONS'})
    fetch('http://localhost:3001/aspirations').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'LOAD_ASPIRATIONS', aspirations: responseJSON.data })
    })
    .catch(error => console.log(error));
  }
}


export const createAspiration = (aspiration) => {
  return dispatch => {
    return fetch('http://localhost:3001/aspirations', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({aspiration: aspiration})
    })
    .then(response => response.json())
    .then(aspiration => {
      console.log('create aspiration')
      dispatch({ type: 'ADD_ASPIRATION', payload: aspiration })
    })
    .catch(error => {
      dispatch({type: 'error'})
     })
  }
}
