export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (payload: any) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};
