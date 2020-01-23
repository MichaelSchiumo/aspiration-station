// import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageDreamers(state = [], action) {


  switch (action.type) {
    case 'ADD_DREAMER':
    console.log(action)
    return [
      ...state,
      action.payload.dreamer

    ]





    case 'LOAD_DREAMER':

    return [
      ...action.dreamer.reduce((newObj, eleObj) => {
        const dreamer = {
          id: eleObj.id,
          age: eleObj.attributes.age,
          name: eleObj.attributes.name,
          sex: eleObj.attributes.sex
        }
        newObj.push(dreamer)
        return newObj
      }, [])
    ]

    //add user - structure needs to match on both sides

    default:
      return state
  }
}
