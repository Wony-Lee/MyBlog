import React, { useCallback } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
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
  width: 85%;
  height: 30px;
  outline: none;
  margin-right: 12px;
`;

const CommentForm = ({ post }) => {
  const [comment, onChangeComment] = useInput("");
  const onCommentSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(post.id, comment);
    },
    [comment]
  );

  return (
    <>
      <CommentLayout>
        <CommentsForm onSubmit={onCommentSubmit}>
          <CommentInput value={comment} onChange={onChangeComment} />
          <button type="submit" style={{ border: "1px solid aqua" }}>
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
