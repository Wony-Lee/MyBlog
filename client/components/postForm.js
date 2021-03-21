import React from "react";
import styled from "@emotion/styled";

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
  return (
    <>
      <GuestLayout>
        <PostContent>
          <PostArea>
            <PostTitle>
              <PostSpan>이름</PostSpan>
              <PostInput placeholder="Name" />
            </PostTitle>
            <PostCenter>
              <PostTextArea />
            </PostCenter>
            <PostFooter>
              <SuccessBtn>확인</SuccessBtn>
              <ReturnBtn type="reset">취소</ReturnBtn>
            </PostFooter>
          </PostArea>
        </PostContent>
      </GuestLayout>
    </>
  );
};

export default PostForm;
