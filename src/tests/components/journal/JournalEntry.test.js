import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import JournalEntry from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';



const mockStore = configureStore([thunk]);
const store = mockStore( {} );
store.dispatch = jest.fn();

const note = {
  id: 0,
  date: 0,
  title: 'Hola',
  body: 'Mundo',
  url: 'https://someplace.com/pic.jpg'
}


const wrapper = mount(
  <Provider store={ store }>
    <JournalEntry { ...note } />
  </Provider>
)


describe('Tests on <JournalEntry />', () => {
  
  test('should render correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should trigger activeNote', () => {
    
    wrapper.find('.journal__entry').prop('onClick')();

    expect( store.dispatch ).toHaveBeenCalledWith( 
      activeNote(note.id, {...note} ) 
    );

  })
  
  

})
