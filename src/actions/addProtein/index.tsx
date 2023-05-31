import { proteinInterface } from "src/interfaces";

export const ADD_PROTEIN = 'ADD_PROTEIN';

const addProtein = (payload: proteinInterface) => {
  return {
    type: ADD_PROTEIN,
    payload,
  };
};

export default addProtein;
