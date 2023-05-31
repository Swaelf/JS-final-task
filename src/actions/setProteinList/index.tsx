export const SET_PROTEIN_LIST = 'SET_PROTEIN_LIST';

const setProteinList = (payload: any) => {
  return {
    type: SET_PROTEIN_LIST,
    payload,
  };
};

export default setProteinList;