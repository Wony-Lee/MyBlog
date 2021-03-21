import React from "react";
import styled from "@emotion/styled";

const PostContent = styled.form`
  width: 70%;
`;

const PostArea = styled.div`
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

const PostTextArea = styled.textarea`
  width: 99.5%;
  margin-top: 20px;
  height: 120px;
  resize: none;
  outline: none;
  margin-bottom: 20px;
  font-size: 13asdpt;
  border: 0px;
`;

const PostFooter = styled.div`
  border-top: 1px solid white;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SuccessBtn = styled.button`
  height: 30px;
  margin-right: 10px;
  width: 100px;
  color: #4169e1;
`;
const ReturnBtn = styled.button`
  height: 30px;
  margin-left: 10px;
  margin-right: 20px;
  width: 100px;
  color: #ff7f50;
`;

const PostForm = () => {
  return (
    <>
      <PostContent>
        <PostArea>
          <PostTitle>
            <PostSpan>이름</PostSpan>
            <PostInput placeholder="Name" />
          </PostTitle>
          <PostTextArea />
          <PostFooter>
            <SuccessBtn>확인</SuccessBtn>
            <ReturnBtn type="reset">취소</ReturnBtn>
          </PostFooter>
        </PostArea>
      </PostContent>
    </>
  );
};

export default PostForm;
