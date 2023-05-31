export const SET_CURRENT_PROTEIN = 'SET_CURRENT_PROTEIN';

const setCurrentProtein = (payload: any) => {
  return {
    type: SET_CURRENT_PROTEIN,
    payload,
  };
};

export default setCurrentProtein;