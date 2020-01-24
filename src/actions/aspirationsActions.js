

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

const addAspiration = (aspiration) => {
  return {type: 'ADD_ASPIRATION', payload: aspiration}
}

export const createAspiration = (aspiration) => {
  return dispatch => {
    return fetch('http://localhost:3001/aspirations', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({aspiration})
    })
    .then(response => response.json())
    .then(aspiration => {
      console.log(aspiration)
      dispatch(addAspiration(aspiration))
      
    })
    .catch(error => {
      dispatch({type: 'CREATE_ASPIRATION', payload: error })
    })
  }
}


export const deleteAspirations = (aspiration) => {

    return dispatch => {
      return fetch(`http://localhost:3001/aspirations/${aspiration.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        // history.push('/aspirations')
        console.log(data)
        dispatch({type: 'DELETE_ASPIRATION', payload: aspiration.id })
      })

    }
  }

  //pass history as an argument to deleteAspirations
