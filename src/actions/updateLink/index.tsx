export const UPDATE_LINK = 'UPDATE_LINK';

const updateLink = (payload: string) => {
  return {
    type: UPDATE_LINK,
    payload,
  };
};

export default updateLink;