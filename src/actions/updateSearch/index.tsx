export const UPDATE_SEARCH = 'UPDATE_SEARCH';

const updateSearch = (payload: string) => {
  return {
    type: UPDATE_SEARCH,
    payload,
  };
};

export default updateSearch;