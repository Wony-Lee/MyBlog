import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { addPost } from "../reducer/guest";

const GuestLayout = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
`;

const PostContent = styled.form`
  width: 70%;
`;
const PostArea = styled.div`
  margin-top: 50px;
  width: 100%;
  border: 1px solid white;
  height: 280px;
`;
const PostTitle = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
`;

const PostInput = styled.input`
  widht: 100px;
  margin-left: 10px;
  height: 25px;
  outline: none;
`;

const PostSpan = styled.span`
  margin-left: 10px;
`;

const PostCenter = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PostTextArea = styled.textarea`
  width: 99%;
  display: flex;
  height: 120px;
  resize: none;
  outline: none;
  font-size: 13pt;
  padding: 10px;
  border: 0px;
`;

const PostFooter = styled.div`
  border-top: 1px solid white;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SuccessBtn = styled.button`
  margin-right: 10px;
  color: #4169e1;
`;
const ReturnBtn = styled.button`
  margin-left: 10px;
  margin-right: 20px;
  color: #ff7f50;
`;

const PostForm = () => {
  const dispatch = useDispatch();
  const [guestName, onChangeGuestName] = useInput("");
  const [guestText, onChangeGuestText] = useInput("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
  }, []);
  return (
    <>
      <GuestLayout>
        <PostContent onSubmit={onSubmit}>
          <PostArea>
            <PostTitle>
              <PostSpan>이름</PostSpan>
              <PostInput
                value={guestName}
                onChange={onChangeGuestName}
                placeholder="Name"
              />
            </PostTitle>
            <PostCenter>
              <PostTextArea
                value={guestText}
                onChange={onChangeGuestText}
                placeholder="내용을 입력해주세요."
              />
            </PostCenter>
            <PostFooter>
              <SuccessBtn type="submit">확인</SuccessBtn>
              <ReturnBtn type="reset">취소</ReturnBtn>
            </PostFooter>
          </PostArea>
        </PostContent>
      </GuestLayout>
    </>
  );
};

export default PostForm;
