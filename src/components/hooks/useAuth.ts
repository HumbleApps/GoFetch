import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { setLoggedInUser } from 'actions/authActions';

const useFirebaseAuth = () => {
  const dispatch = useDispatch();

  const createNewUser = ({ email, password }) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        dispatch(setLoggedInUser(email));
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
      .then(() => {
        console.log('User signed in!');
        dispatch(setLoggedInUser(email));
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
  }

  return {
    createNewUser,
    signIn,
    signOut
  }

}

export default useFirebaseAuth;