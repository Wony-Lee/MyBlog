import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducer/guest";
const CommentLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const CommentsForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const CommentInput = styled.input`
  border: 0px;
  width: 65%;
  height: 30px;
  outline: none;
  margin-right: 12px;
`;

const CommentNameInput = styled.input``;

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user?.id);
  const { addCommentDone, addCommentLoading } = useSelector((state) => state);
  const [commentName, onChangeCommentName, setCommentName] = useInput("");
  const [comment, onChangeComment, setComment] = useInput("");
  useEffect(() => {
    if (addCommentDone) {
      setComment("");
      setCommentName("");
    }
  }, [addCommentDone]);

  const onCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          content: comment,
          postId: post.id,
          userId: id,
        },
      });
    },
    [comment, id]
  );
  console.log(onCommentSubmit);

  return (
    <>
      <CommentLayout>
        <CommentsForm onSubmit={onCommentSubmit}>
          <CommentNameInput
            value={commentName}
            onChange={onChangeCommentName}
          />
          <CommentInput value={comment} onChange={onChangeComment} />
          <button
            type="submit"
            loading={addCommentLoading}
            style={{ border: "1px solid aqua" }}
          >
            작성
          </button>
        </CommentsForm>
      </CommentLayout>
    </>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
