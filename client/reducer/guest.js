export const initialState = {
  guestPost: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "홍사마",
      },
      content: "Text",
    },
  ],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  nickname: "김길동",
  content: "Hi",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        guestPost: [dummyPost, ...state.guestPost],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
