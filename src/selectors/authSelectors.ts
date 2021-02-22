import { RootState } from 'store';

export const selectUserEmail = (state: RootState): boolean =>
  state.auth.email;

