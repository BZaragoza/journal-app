
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Tests on Auth-actions', () => {

  beforeEach(() => {
    store = mockStore(initState);
  })

  test('Login and Logout should create its respective action', () => {

    const loginAction = store.dispatch(login('testing_uid', 'Testing'))
    const logoutAction = store.dispatch(logout());

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        uid: 'testing_uid',
        displayName: 'Testing'
      }
    });

    expect(logoutAction).toEqual({
      type: types.logout
    });

  });

  test('startLogout should logout and clean notes', async () => {

    await store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.logout)
    expect(actions[1].type).toBe(types.notesLogoutCleaning)

  })

  test('Login should auth without Google credentials', async () => {

    await store.dispatch(startLoginEmailPassword('test@testing.com', '123456'));

    const actions = store.getActions();

    expect( actions[0].type ).toBe(types.uiStartLoading)
    expect( actions[2].type ).toBe(types.uiFinishLoading)

    expect( actions[1] ).toEqual({
      type: types.login,
      payload: {
        uid: expect.any(String),
        displayName: null
      }
    })

  })



})
