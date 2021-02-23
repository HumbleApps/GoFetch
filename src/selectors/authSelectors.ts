import { RootState } from 'store';

export const selectUserEmail = (state: RootState): boolean =>
  state.auth.email;

export const selectUserToken = (state: RootState): boolean =>
  state.auth.uid;

export const selectIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;

export const selectIsFetching = (state: RootState): boolean => state.auth.isFetching;

