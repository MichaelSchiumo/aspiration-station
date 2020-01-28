// import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageSongs(state = [], action) {


  switch (action.type) {
    case 'ADD_SONG':

    {
    debugger
    console.log(action)
    return [
      ...state,
      action.payload.song

    ]
}


    case 'DELETE_SONG':

    const songs = state.filter(song => song.id !== action.payload);

    return songs




    case 'LOAD_SONGS':

    return [
      ...action.songs.reduce((newObj, eleObj) => {
        const song = {
          id: eleObj.id,
          title: eleObj.attributes.title,
          genre: eleObj.attributes.genre,
          artist: eleObj.attributes.artist


        }
        newObj.push(song)
        return newObj
      }, [])
    ]

    //add user - structure needs to match on both sides

    default:
      return state
  }
}
