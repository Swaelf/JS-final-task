export const SET_LOAD_STATE = 'SET_LOAD_STATE';

const setLoadState = (payload: boolean) => {
  return {
    type: SET_LOAD_STATE,
    payload,
  };
};

export default setLoadState;