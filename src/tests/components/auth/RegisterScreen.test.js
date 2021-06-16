import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom'
import thunk from 'redux-thunk';

import RegisterScreen from '../../../components/auth/RegisterScreen';
import { types } from '../../../types/types';

const mockStore = configureStore([thunk]);

const initState = {
  ui: {
    loading: false,
    msgError: null
  }
}

const store = mockStore(initState)


describe('Tests on <RegisterScreen />', () => {
  
  const wrapper = mount( 
    <Provider store={ store }>
      <MemoryRouter>
        <RegisterScreen />
      </MemoryRouter>
    </Provider>
  )

  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });


  test('should dispatch the "Set Error" because email field is not valid', () => {

    const emailField = wrapper.find('input[name="email"]');
    
    emailField.simulate('change', {
      target: {
        value: '',
        name: 'email'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault(){}
    });

    const actions = store.getActions();

    expect( actions[0] ).toEqual({
      type: types.uiSetError,
      payload: 'Email not valid'
    })
  });  

});
