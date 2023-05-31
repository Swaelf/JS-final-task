export const ADD_PROTEIN = 'ADD_PROTEIN';

const addProtein = (payload: any) => {
  return {
    type: ADD_PROTEIN,
    payload,
  };
};

export default addProtein;
