import auth from '@react-native-firebase/auth';
import { CREATE_NEW_USER, setLoggedInUser, SIGNIN, SIGNOUT } from 'actions/authActions';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { withLoadingAndErrors } from 'sagas/helperSaga';
import { removeToken, setToken } from 'utils/token';
import { CreateUserResponse } from './../types/authTypes';

/**
 * CreateNewFirebaseUser
 * @param action {email, password}
 */
function* _createNewFirebaseUser(action) {
  const { email, password } = action.data;
  try {
    const res: CreateUserResponse = yield auth().createUserWithEmailAndPassword(email, password);
    yield put(setLoggedInUser({ email, uid: res.user.uid }));
    yield call(setToken, res.user.uid);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
    throw error;
  }
}

function* createNewUser() {
  yield takeLatest(CREATE_NEW_USER, withLoadingAndErrors(_createNewFirebaseUser));
}

/**
 * signInFirebaseUser
 * @param action {email, password}
 */
function* _signInFirebaseUser(action) {
  const { email, password } = action.data;
  try {
    const res: CreateUserResponse = yield auth().signInWithEmailAndPassword(email, password);
    yield put(setLoggedInUser({ email, uid: res.user.uid }));
    yield call(setToken, res.user.uid);

  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error(error);
    throw error;
  }
}

function* signInUser() {
  yield takeLatest(SIGNIN, withLoadingAndErrors(_signInFirebaseUser));
}

/**
 * Signout User session
 */
function* _signOutFirebaseUser() {
  try {
    yield auth().signOut();
    yield call(removeToken);
  }
  catch (err) {
    console.log(err);
  }
}

function* signOutUser() {
  yield takeLatest(SIGNOUT, withLoadingAndErrors(_signOutFirebaseUser));
}

export default function* authSaga() {
  yield all([createNewUser(), signInUser(), signOutUser()]);
}
