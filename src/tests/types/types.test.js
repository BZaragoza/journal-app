import { types } from '../../types/types';

describe('Tests on Action types', () => {
  
  test('Types object should be the same as always', async () => {
    
    expect( types ).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
    
      notesAddNew: "[Notes] New Note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update note",
      notesFilesURL: "[Notes] Updated image URL",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    })

  })

})
