import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";

const PostForm = styled.form`
  width: 50%;
  border: 1px solid #ddd;
`;

const PostItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const PostUser = styled.div`
  margin-left: 5%;
  background: 1px solid green;
`;

const PostContent = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  height: 150px;
  flex-direction: column;
`;
const PostContentText = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  outline: none;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnSuccess = styled.button`
  width: 100px;
  height: 30px;
  border: 0px;
  background: navy;
  color: white;
  margin: 5px;
  outline: none;
  cursor: pointer;
`;

const BtnReset = styled.button`
  width: 100px;
  height: 30px;
  border: 0px;
  background: white;
  color: navy;
  margin: 5px;
  outline: none;
  cursor: pointer;
`;
const GuestPost = () => {
  const [Text, onChangeText] = useInput("");

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      console.log(e);
    },
    [Text]
  );

  return (
    <>
      <PostForm onSubmit={submitHandler}>
        <PostItem>
          <PostUser>
            <span>Name</span>
            <span>Today</span>
          </PostUser>
        </PostItem>
        <PostContent>
          <PostContentText
            name="GuestPost"
            value={Text}
            onChange={onChangeText}
          ></PostContentText>
          <BtnBox>
            <BtnSuccess type="submit">작성</BtnSuccess>
            <BtnReset>취소</BtnReset>
          </BtnBox>
        </PostContent>
      </PostForm>
    </>
  );
};

export default GuestPost;
