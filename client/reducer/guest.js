import shortId from "shortid";

export const initialState = {
  guestPost: [
    {
      id: 1,
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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,

  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: shortId.generate(),
  User: {
    id: 1,
    guestname: "김길동",
  },
  content: data,
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: shortId.generate(),
    guestname: "김길동",
  },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        guestPost: [dummyPost(action.data), ...state.guestPost],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS: {
      const postIndex = state.guestPost.findIndex(
        (v) => v.id === action.data.postId
      );
      const post = { ...state.guestPost[postIndex] };
      post.Comments = [dummyComment(action.data.content), ...post.Comments];
      const guestPost = [...state.guestPost];
      guestPosts[postIndex] = post;
      return {
        ...state,
        guestPost,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
