import produce from "immer";
import shortId from "shortid";

export const initialState = {
  guestPost: [
    {
      id: 1,
      guestname: "홍사마",
      content: "Text",
      Comments: [
        {
          commentName: "김동식",
          content: "오~",
        },
        {
          commentName: "오동통",
          content: "우~",
        },
        {
          commentName: "홍길길",
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

const dummyPost = (data, name) => ({
  id: shortId.generate(),
  content: data,
  guestname: name,
  Comments: [],
});

const dummyComment = (data, name) => ({
  id: shortId.generate(),
  content: data,
  commentName: name,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.guestPost.unshift(
          // dummyPost(action.data.content, action.data.guestname)
          action.data
        );
        console.log(action.data.guestname);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:
        const guest = draft.guestPost.find(
          (item) => item.id === action.data.postId
        );
        guest.Comments.unshift(
          dummyComment(action.data.content, action.data.commentName)
        );
        console.log(action.data.commentName);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
