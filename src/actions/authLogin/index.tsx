import { loginInterface } from "src/interfaces";

export const AUTH_LOGIN = 'AUTH_LOGIN';

const authLogin = (payload: loginInterface) => {
  return {
    type: AUTH_LOGIN,
    payload,
  };
};

export default authLogin;