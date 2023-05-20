export const UPDATE_ITEMS = 'UPDATE_ITEMS';

export const updateItems = (payload: any) => {
  return {
    type: UPDATE_ITEMS,
    payload,
  };
};