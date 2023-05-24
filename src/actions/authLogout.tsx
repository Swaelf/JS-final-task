export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authLogout = (payload: string) => {
  return {
    type: AUTH_LOGOUT,
    payload,
  };
};