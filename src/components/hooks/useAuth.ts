import { setAuthenticated, setFetching } from 'actions/authActions';
import { createNewUser, signInUser, signOutUser } from 'actions/authActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'selectors/authSelectors';
import isEmpty from 'utils/isEmpty';
import { getToken } from 'utils/token';

const useAuth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const createUser = ({ email, password }) => {
    dispatch(createNewUser({ email, password }));
  }

  const signIn = ({ email, password }) => {
    dispatch(signInUser({ email, password }));
  }

  const signOut = () => {
    dispatch(signOutUser());
  }

  useEffect(() => {
    const _getToken = async () => {
      try {
        const token = await getToken();

        if (!isEmpty(token)) {
          dispatch(setAuthenticated(true));
        } else {
          // dispatch(showModal(ModalNames.LANGUAGE_MODAL));
          dispatch(setFetching(false));
        }
      } catch (error) {
        throw error;
      }
    };

    _getToken();
  }, [dispatch]);

  return {
    createUser,
    signIn,
    signOut,
    isAuthenticated
  }

}

export default useAuth;
