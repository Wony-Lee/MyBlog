import React, { useCallback, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import useInput from "../../hooks/useInput";
import {
  ADD_BOARD_REQUEST,
  UPLOAD_IMAGES_REQUEST,
  REMOVE_IMAGE,
} from "../../reducer/board";
import { useDispatch, useSelector } from "react-redux";

const WriteForm = styled.form`
  width: 100%;
  height: 100%;
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
const PreViewSection = styled.div`
  display: flex;
  justify-content: center;
  max-width: 50%;
  height: 150px;
  padding: 2px;
  overflow: scroll;
`;
const PreviewBox = styled.div`
  display: flex;
  width: 100%;
`;

const PreView = styled.div`
  border: 1px solid white;
  min-width: 100px;
  height: 100px;
  margin: 5px;
  position: relative;
`;
const RemoveBtn = styled.span`
  position: absolute;
  color: white;
  right: 0;
  padding: 3px;
  cursor: pointer;
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
  const dispatch = useDispatch();
  const { addBoardDone, imagesPath } = useSelector((state) => state.board);
  const [boardTitle, onChangeBoardTitle, setBoardTitle] = useInput("");
  const [boardContent, onChangeBoardContent, setBoardContent] = useInput("");

  const onReset = () => {
    setBoardTitle("");
    setBoardContent("");
  };

  useEffect(() => {
    if (addBoardDone) {
      setBoardTitle("");
      setBoardContent("");
    }
  }, [addBoardDone]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        !boardTitle ||
        !boardTitle.trim() ||
        !boardContent ||
        !boardContent.trim()
      ) {
        return alert("제목 혹은 내용을 입력해주세요.");
      }
      const formData = new FormData();
      imagesPath.forEach((p) => {
        formData.append("image", p);
      });
      formData.append("boardTitle", boardTitle);
      formData.append("boardContent", boardContent);
      dispatch({
        type: ADD_BOARD_REQUEST,
        data: formData,
      });
    },
    [boardTitle, boardContent, imagesPath]
  );

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });
  const onRemoveImage = (index) => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  };
  return (
    <>
      <WriteForm onSubmit={onSubmit} encType="multipart/form-data">
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
          <PreViewSection>
            <PreviewBox>
              {imagesPath.map((v, i) => (
                <PreView key={v} style={{ display: "inline-block" }}>
                  {/* <RemoveBtn onClick={onRemoveImage(i)}>X</RemoveBtn> */}
                  <img
                    src={`http://localhost:4444/${v}`}
                    style={{ width: "200px" }}
                    alt={v}
                  />
                </PreView>
              ))}
            </PreviewBox>
          </PreViewSection>
          <SectionThree>
            <button type="button" onClick={onClickImageUpload}>
              파일선택
            </button>
            <FileInput
              type="file"
              multiple
              hidden
              name="image"
              accept="image/jpeg, image/jpg, image/png"
              id="boardFileUpload"
              ref={imageInput}
              onChange={onChangeImages}
            />
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
