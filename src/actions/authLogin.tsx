export const AUTH_LOGIN = 'AUTH_LOGIN';

export const authLogin = (payload: string) => {
  return {
    type: AUTH_LOGIN,
    payload,
  };
};