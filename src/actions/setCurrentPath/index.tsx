export const SET_CURRENT_PATH = 'SET_CURRENT_PATH';

const setCurrentPath = (payload: string) => {
  return {
    type: SET_CURRENT_PATH,
    payload,
  };
};

export default setCurrentPath;