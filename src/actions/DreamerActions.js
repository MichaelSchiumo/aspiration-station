

export const fetchDreamer = () => {

  return (dispatch) => {
    // dispatch({ type: 'LOAD_ASPIRATIONS'})
    fetch('http://localhost:3001/dreamers').then(response => {
      return response.json()
    }).then(responseJSON => {
      // console.log("test2")
      dispatch({ type: 'LOAD_DREAMER', dreamer: responseJSON.data })
    })
    .catch(error => console.log(error));
  }
}

const addDreamer = (dreamer) => {
  return {type: 'ADD_DREAMER', payload: dreamer.data}
}

export const createDreamer = (dreamer) => {

  return dispatch => {
    return fetch('http://localhost:3001/dreamers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({dreamer})
    })
    .then(response => response.json())
    .then(dreamer => {

      dispatch(addDreamer(dreamer))
    })
    .catch(error => {
      dispatch({type: 'CREATE_DREAMER', payload: error })
    })
  }
}

//
// export const deleteDreamer = (dreamer) => {
//
//     return dispatch => {
//       return fetch(`http://localhost:3001/dreamers/${dreamer.id}`, {
//         method: 'DELETE'
//       })
//       .then(response => response.json())
//       .then(data => {
//         // history.push('/aspirations')
//         console.log(data)
//         dispatch({type: 'DELETE_DREAMER', payload: dreamer.id })
//       })
//
//     }
//   }

  //pass history as an argument to deleteAspirations
