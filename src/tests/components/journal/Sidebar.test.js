import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';
import Sidebar from '../../../components/journal/Sidebar';

jest.mock('../../../actions/auth', () => ({
  startLogout: jest.fn()
}));

jest.mock('../../../actions/notes', () => ({
  startNewNote: jest.fn()
}));

const mockStore = configureStore([thunk]);

const initState = {
  auth: {}
}

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <Sidebar />
  </Provider>
)

describe('Tests on <Sidebar />', () => {

  

  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should call startLogout', () => {
    wrapper.find('button').prop('onClick')();
    expect( startLogout ).toHaveBeenCalled()
  });

  test('should call startNewNote', () => {
    wrapper.find('.journal__new-entry').prop('onClick')();
    expect( startNewNote ).toHaveBeenCalled();
  });
  
})
