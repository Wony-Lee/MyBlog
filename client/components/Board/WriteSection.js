import React, { useCallback } from "react";
import styled from "@emotion/styled";
import useInput from "../../hooks/useInput";

const WriteForm = styled.form`
  width: 100%;
`;
const WriteContainer = styled.div`
  
  display: flex;
  flex-direction:column;
  align-items:center;
  border:1px solid gold
  color: white;
  width:100%;
`;

const SectionOne = styled.div`
  width: 50%;
  text-align: center;
  margin: 30px 0;
`;
const TitleInput = styled.input`
  border: 0;
  height: 30px;
  width: 100%;
`;
const SectionTwo = styled.div`
  width: 50%;
`;
const ContentText = styled.textarea`
  resize: none;
  height: 300px;
  width: 100%;
  outline: none;
`;

const SectionThree = styled.div`
  margin: 30px;
`;
const FileInput = styled.input`
  display: none;
`;
const FileLable = styled.label`
  color: black;
  background: white;
  padding: 10px;
`;

const WriteSection = () => {
  const [boardTitle, onChangeBoardTitle, setBoardTitle] = useInput("");
  const [boardContent, onChangeBoardContent, setBoardContent] = useInput("");

  const onReset = () => {
    setBoardTitle("");
    setBoardContent("");
  };
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <>
      <WriteForm onSubmit={onSubmit}>
        <WriteContainer>
          <SectionOne>
            <label htmlFor="boardTitle"></label>
            <TitleInput
              id="boardTitle"
              value={boardTitle}
              onChange={onChangeBoardTitle}
              placeholder="제목"
            />
          </SectionOne>
          <SectionTwo>
            <label htmlFor="boardContent"></label>
            <ContentText
              id="boardContent"
              value={boardContent}
              onChange={onChangeBoardContent}
              placeholder="내용을 입력해주세요."
            ></ContentText>
          </SectionTwo>
          <SectionThree>
            <FileLable htmlFor="boardFileUpload">파일선택</FileLable>
            <FileInput type="file" id="boardFileUpload" />
          </SectionThree>
          <div>
            <button type="submit" style={{ margin: "10px" }}>
              작성
            </button>
            <button type="reset" onClick={onReset} style={{ margin: "10px" }}>
              취소
            </button>
          </div>
        </WriteContainer>
      </WriteForm>
    </>
  );
};

export default WriteSection;
