// /**
//  * @jest-environment jsdom
//  */

// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk'
// import fs from 'fs';
// import path from 'path';

// import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
// import { db } from '../../firebase/firebase-config';
// import { types } from '../../types/types';
// import { uploadFile } from '../../helpers/uploadFile';
 
// const middlewares = [ thunk ];
// const mockStore = configureStore(middlewares);

// const initState = {
//   auth: {
//     uid: "testing_uid"
//   },
//   notes: {
//     active: {
//       id: '1E6UXxUXTNu3dscfqwfF' ,
//       title: 'Titulo',
//       body: 'Body'
//     }
//   }
// }

// let store = mockStore(initState)

// jest.setTimeout(10000);

// jest.mock( '../../helpers/uploadFile', () => ({
//   uploadFile: jest.fn( () => Promise.resolve('https://hola-mundo.com/foto.jpg'))
// }))


describe('Tests on Notes-actions', () => {

  test('should', () => {
    
  })
  

//   beforeEach( () => {
    
//     store = mockStore( initState );

//   })


//   test('Should create a new note with startNewNote', async () => {

//     await store.dispatch( startNewNote() );
    
//     const actions = store.getActions();
    
//     expect( actions[0] ).toEqual({
//       type: types.notesActive,
//       payload: {
//         id: expect.any(String),
//         body: "",
//         date: expect.any(Number),
//         title: "",
//       }
//     }); 
    
//     expect( actions[1] ).toEqual({
//       type: types.notesAddNew,
//       payload: {
//         id: expect.any(String),
//         title: '',
//         body: '',
//         date: expect.any(Number)
//       }
//     });
    
//     const docId = actions[0].payload.id;
    
//     await db.doc(`/testing_uid/journal/notes/${ docId }`).delete();
    
//   });
  
//   test('startLoadingNotes should load notes', async () => {
    
//     await store.dispatch( startLoadingNotes( 'testing_uid' ) );

//     const actions = store.getActions();

//     expect( actions[0] ).toEqual({
//       type: types.notesLoad,
//       payload: expect.any(Array)
//     });
    
//     const expected = {
//       id: expect.any(String),
//       title: expect.any(String),
//       body: expect.any(String),
//       date: expect.any(Number)
//     };

//     expect( actions[0].payload[0] ).toMatchObject( expected ); 

//   });

//   // test('startSaveNote should update a note', async () => {
    
//   //   const note = {
//   //     id: '1E6UXxUXTNu3dscfqwfF',
//   //     title: 'Titulo',
//   //     body: 'Body'
//   //   };

//   //   await store.dispatch( startSaveNote( note ) );

//   //   const actions = store.getActions();
//   //   expect( actions[0].type ).toBe( types.notesUpdated );


//   //   const docRef = await db.doc(`testing_uid/journal/notes/${ note.id }`).get()
//   //   expect( docRef.data().title ).toBe( note.title )

//   // })
  
//   test('startUploading should update image URL on db', async () => {
    
//     const file = fs.readFileSync(path.resolve(__dirname, '../../image.png'))
//     await store.dispatch( startUploading( file ) ); 

//     // uploadFile


//   })
  
  

})
