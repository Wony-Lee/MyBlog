import React from "react";
import styled from "@emotion/styled";

import useInput from "../hooks/useInput";

const DailyPostLayout = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const DailyPostForm = styled.form`
  border: 2px solid white;
  width: 50%;
`;

const WriteContainer = styled.div``;

const WriteSubject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const SubjectSpan = styled.span`
  margin-right: 30px;
`;
const SubjectInput = styled.input`
  width: 50%;
  height: 20px;
`;

const WriteContent = styled.div`
  height: 300px;
  padding: 10px;
`;

const WriteTextArea = styled.textarea`
  width: 99.5%;
  border: 0px;
  height: 99%;
  resize: none;
  outline: none;
`;

const UploadContent = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PreviewBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid white;
  margin: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
`;

const WriteBtn = styled.button`
  margin: 10px;
`;

const DailyPost = () => {
  const [subject, onChangeSubject] = useInput("");

  const [DailyContents, onChangeDailyContents] = useInput("");

  return (
    <>
      <DailyPostLayout>
        <DailyPostForm>
          <WriteContainer>
            <WriteSubject>
              <SubjectSpan>제목</SubjectSpan>
              <SubjectInput value={subject} onChange={onChangeSubject} />
            </WriteSubject>
            <WriteContent>
              <WriteTextArea
                value={DailyContents}
                onChange={onChangeDailyContents}
              />
            </WriteContent>
            <UploadContent>
              <PreviewBox>미리보기</PreviewBox>
              <input type="file" />
            </UploadContent>
            <ButtonBox>
              <WriteBtn type="submit" style={{ color: "navy" }}>
                작성
              </WriteBtn>
              <WriteBtn type="reset" style={{ color: "red" }}>
                취소
              </WriteBtn>
            </ButtonBox>
          </WriteContainer>
        </DailyPostForm>
      </DailyPostLayout>
    </>
  );
};

export default DailyPost;
