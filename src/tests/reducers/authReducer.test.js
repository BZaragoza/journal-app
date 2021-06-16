import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('Tests on authReducer', () => {

  const initialState = {
    uid: "1c740486",
    name: "Gutiérrez"
  }
  
  
  test('Should login and return uid and displayName in a new state', () => {
    
    const action = {
      type: types.login,
      payload: {
        uid: "1c740486",
        displayName: "Gutiérrez"
      }
    }

    const newState = authReducer( {}, action);

    expect( newState ).toEqual( initialState );

  });

  test('Should logout and return empty state ( {} )', () => {
    
    const action = {
      type: types.logout,
    }

    const newState = authReducer( initialState, action)

    expect( newState ).toEqual( {} );

  })
  
  test('Should receive an unknown action and return the received state', () => {
    
    const action = {
      type: "Unknown type"
    }

    const newState = authReducer( initialState, action)

    expect( newState ).toEqual( initialState );


  })
    

})
