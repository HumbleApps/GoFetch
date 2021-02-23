import { selectUserToken } from './../../selectors/authSelectors';
import { setToken, removeToken } from './../../utils/token/token';
import { useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { setLoggedInUser } from 'actions/authActions';
import pathNames from 'routes/pathNames';

const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewUser = ({ email, password }) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('User account created & signed in!', res);
        dispatch(setLoggedInUser({ email, uid: res.user.uid }));
        dispatch(setToken(res.user.uid));
        history.push(pathNames.home);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  const signIn = ({ email, password }) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('User signed in!', res);
        dispatch(setLoggedInUser({ email, uid: res.user.uid }));
        dispatch(setToken(res.user.uid));
        history.push(pathNames.home);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));

    const token = useSelector(selectUserToken);
    removeToken();
    history.push(pathNames.login);
  }

  return {
    createNewUser,
    signIn,
    signOut
  }

}

export default useAuth;