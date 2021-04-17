import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid white;
  color: white;
  margin-bottom: 30px;
`;

const PostForm = styled.form`
  border: 1px solid white;
`;

const PostTitle = styled.div`
  border: 1px solid white;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
`;
const PostItem = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const PostInput = styled.input`
  border: 0px;
  outline: none;
  height: 30px;
  width: 50%;
`;

const PostTextarea = styled.textarea`
  border: 0px;
  resize: none;
  outline: none;
  width: 50%;
  height: 200px;
`;

const PostBtnForm = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
`;

const DailyForm = () => {
  return (
    <>
      <Container>
        <PostForm>
          <PostTitle>
            <PostInput placeholder="Title" />
          </PostTitle>
          <PostItem>
            <PostTextarea></PostTextarea>
          </PostItem>
          <PostBtnForm>
            <div>파일업로드버튼</div>
            <div>업로드</div>
          </PostBtnForm>
        </PostForm>
      </Container>
    </>
  );
};

export default DailyForm;
