import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginScreen from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth:{},
  ui: {
    loading: false,
    msgError: null
  },
}

let store = mockStore( initState );
store.dispatch = jest.fn();



describe('Tests on <LoginScreen />', () => {
  
  beforeEach(() => {
    store = mockStore(initState);
    jest.clearAllMocks();
  })


  const wrapper = mount( 
    <Provider store={ store} >
      <MemoryRouter>
        <LoginScreen />
      </MemoryRouter>
    </Provider> 
  )


  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should trigger startGoogleLogin', () => {
    wrapper.find('.google-btn').prop('onClick')();

    expect( startGoogleLogin ).toHaveBeenCalled();
  });
  
  test('should trigger startLoginEmailPassword with its arguments', () => {
    wrapper.find('form').prop('onSubmit')({
      preventDefault: jest.fn()
    });

    expect( startLoginEmailPassword ).toHaveBeenCalledWith('brianz@gmail.com','123456');
  });
  
});
