// import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageAspirations(state = [], action) {


  switch (action.type) {
    case 'ADD_ASPIRATION':
    console.log(action)
    return [
      ...state,
      action.payload.aspiration

    ]



    case 'DELETE_ASPIRATION':

    const aspirations = state.filter(aspiration => aspiration.id !== action.payload);
    
    return aspirations




    case 'LOAD_ASPIRATIONS':

    return [
      ...action.aspirations.reduce((newObj, eleObj) => {
        const aspiration = {
          id: eleObj.id,
          title : eleObj.attributes.title,
          category: eleObj.attributes.category,
          timeframe: eleObj.attributes.timeframe,
          status: eleObj.attributes.status,
          age: eleObj.attributes.age,
          name: eleObj.attributes.name,
          sex: eleObj.attributes.sex
        }
        newObj.push(aspiration)
        return newObj
      }, [])
    ]

    //add user - structure needs to match on both sides

    default:
      return state
  }
}
