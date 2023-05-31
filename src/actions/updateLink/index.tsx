export const UPDATE_LINK = 'UPDATE_LINK';

const updateLink = (payload: any) => {
  return {
    type: UPDATE_LINK,
    payload,
  };
};

export default updateLink;