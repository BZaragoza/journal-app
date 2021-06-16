import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import NoteScreen from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';



jest.mock('../../../actions/notes', () => ({
  activeNote: jest.fn()
}));

const mockStore = configureStore([thunk]);

const initState = {
  auth: {
    uid: '1',
    name: 'Brian'
  },
  ui: {
    loading: false,
    msgError: null
  },
  notes: {
    notes: [],
    active: {
      id: 1234,
      title: "",
      body: ""
    }
  }
}

const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={ store }>
    <NoteScreen />
  </Provider>
)

describe('Tests on <NoteScreen />', () => {
  
  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should trigger activeNote', () => {
    
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: "title",
        value: 'Changed'
      }
    });

    expect( activeNote ).toHaveBeenCalledWith( 1234, {"body": "", "id": 1234, "title": "Changed"});

  })
  

  

})
