export const UPDATE_ENTRY = 'UPDATE_ENTRY';

export const updateEntry = (payload: any) => {
  return {
    type: UPDATE_ENTRY,
    payload,
  };
};