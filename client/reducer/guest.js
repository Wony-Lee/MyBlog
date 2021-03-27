export const initialState = {
  guestPost: [
    {
      id: 1,
      User: {
        id: 1,
        guestname: "홍사마",
      },
      content: "Text",
    },
  ],
  Comments: [
    {
      User: {
        guestname: "김동식",
      },
      content: "오~",
    },
    {
      User: {
        guestname: "오동통",
      },
      content: "우~",
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
  content: "더미데이터",
  User: {
    id: 3,
    guestname: "김길동",
  },
};

const dummyComments = {
  id: 2,
  content: " 더미댓글",
  User: {
    id: 3,
    guestname: "김창식",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        guestPost: [dummyPost, ...state.guestPost],
        Comments: [dummyComments, ...state.Comments],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
