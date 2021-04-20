import produce from "immer";

export const initialState = {
  dailyPost: [
    {
      id: 1,
      User: {
        id: 1,
        name: "Wony",
      },
      dailyTitle: "Hello",
      dailyContent: "Hi",
    },
  ],
  dailyPostLoading: false,
  dailyPostDone: false,
  dailyPostError: null,
};

export const DAILY_POST_REQUEST = "DAILY_POST_REQUEST";
export const DAILY_POST_SUCCESS = "DAILY_POST_SUCCESS";
export const DAILY_POST_FAILURE = "DAILY_POST_FAILURE";

export const addDailyPost = (data) => ({
  type: DAILY_POST_SUCCESS,
  data,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DAILY_POST_REQUEST:
        draft.dailyPostLoading = true;
        draft.dailyPostDone = false;
        draft.dailyPostError = null;
        break;
      case DAILY_POST_SUCCESS:
        draft.dailyPostLoading = false;
        draft.dailyPostDone = true;
        draft.dailyPost.unshift(action.data);
        break;
      case DAILY_POST_FAILURE:
        draft.dailyPostLoading = false;
        draft.dailyPostError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
