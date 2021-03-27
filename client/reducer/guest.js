export const initialState = {
  guestPost: [
    {
      id: 2,
      User: {
        id: 1,
        guestname: "홍사마",
      },
      content: "Text",
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
        {
          User: {
            guestname: "홍길길",
          },
          content: "호우~",
        },
      ],
    },
  ],
  postAdded: false,
};

console.log(initialState);

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

// const dummyComments = {
//   id: 2,
//   content: " 더미댓글",
//   User: {
//     id: 3,
//     guestname: "김창식",
//   },
// };

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    guestname: "김길동",
  },
  content: "더미데이터",
  Comments: [],
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
