// import uuid from 'uuid';
// export const cuidFn = cuid;

export default function manageDreamers(state = [], action) {


  switch (action.type) {
    case 'ADD_DREAMER':
    {

    // console.log(action)
    return [
      ...state,
      action.payload

    ]

  }

//look at value coming in to the action (LOAD DREAMER)
//there is no key once you add dreamer
//make sure that we hit load dreamer after we render the dreamer container
//make sure there is a key (dreamer) inside the action (line 13 in actions)


    case 'LOAD_DREAMER':
    {
      
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
  }
    //add user - structure needs to match on both sides

    default:
      return state
  }
}
