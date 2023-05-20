export const UPDATE_SEARCH = 'UPDATE_SEARCH';

export const updateSearch = (payload: string) => {
  return {
    type: UPDATE_SEARCH,
    payload,
  };
};