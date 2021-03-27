import React, { useCallback } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";

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
`;

const CommentInput = styled.input`
  margin-left: 35px;
  border: 0px;
  width: 90%;
  height: 30px;
  outline: none;
`;

const CommentForm = ({ post }) => {
  const [comment, onChangeComment] = useInput("");
  const onCommentSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
    <>
      <CommentLayout>
        <CommentsForm onSubmit={onCommentSubmit}>
          <CommentInput value={comment} onChange={onChangeComment} />
        </CommentsForm>
        <button type="submit" style={{ border: "1px solid aqua" }}>
          작성
        </button>
      </CommentLayout>
    </>
  );
};

export default CommentForm;
