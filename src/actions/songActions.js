

export const fetchSongs = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOAD_ASPIRATIONS'})

    fetch('http://localhost:3001/songs').then(response => {
      return response.json()
    }).then(responseJSON => {

      dispatch({ type: 'LOAD_SONGS', quotes: responseJSON.data })
    })
    .catch(error => console.log(error));
  }
}

const addSong = (song) => {
  return {type: 'ADD_SONG', payload: song}
}

export const createSong = (song) => {

  return dispatch => {
    return fetch('http://localhost:3001/songs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({song})
    })
    .then(response => response.json())
    .then(song => {
      // console.log(quote)
      dispatch(addSong(song))

    })
    .catch(error => {
      dispatch({type: 'CREATE_SONG', payload: error })
    })
  }
}


export const deleteSongs = (song) => {

    return dispatch => {
      return fetch(`http://localhost:3001/songs/${song.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        // history.push('/aspirations')
        console.log(data)
        dispatch({type: 'DELETE_SONG', payload: song.id })
      })

    }
  }
