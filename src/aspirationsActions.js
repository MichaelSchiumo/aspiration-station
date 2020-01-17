

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

      dispatch(addAspiration(aspiration))
    })
    .catch(error => {
      dispatch({type: 'asdf', payload: error })
    })
  }
}


export const deleteAspirations = (aspiration, id) => {
    return dispatch => {
      return fetch('http://localhost:3001/aspiration', {
        method: 'DELETE'
      })
      .then(response => response.json());
    }
  }

// export const deleteAspiration = (id) => {
//     return {
//         type: actionTypes.REMOVE_CONTACT,
//         id: id
//     }
// }
