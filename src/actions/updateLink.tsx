export const UPDATE_LINK = 'UPDATE_LINK';

export const updateLink = (payload: any) => {
  return {
    type: UPDATE_LINK,
    payload,
  };
};