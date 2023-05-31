export const AUTH_LOGIN = 'AUTH_LOGIN';

const authLogin = (payload: object) => {
  return {
    type: AUTH_LOGIN,
    payload,
  };
};

export default authLogin;