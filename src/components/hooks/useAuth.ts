import { createNewUser, signInUser, signOutUser } from 'actions/authActions';
import { useDispatch } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch();

  const createUser = ({ email, password }) => {
    dispatch(createNewUser({ email, password }));
  }

  const signIn = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
  }

  const signOut = () => {
    dispatch(signOutUser());
  }

  return {
    createUser,
    signIn,
    signOut
  }

}

export default useAuth;