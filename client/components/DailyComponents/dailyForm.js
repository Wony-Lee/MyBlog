import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import useInput from "../../hooks/useInput";
import { DAILY_POST_REQUEST } from "../../reducer/daily";

const Container = styled.div`
  color: white;
  margin-bottom: 30px;
`;

const PostForm = styled.form`
  border: 1px solid white;
  padding-bottom: 5px;
`;

const PostTitle = styled.div`
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
`;
const PostItem = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const PostInput = styled.input`
  border: 0px;
  outline: none;
  height: 30px;
  width: 70%;
  box-shadow: 5px 5px 5px 5px #ddd;
`;

const PostTextarea = styled.textarea`
  border: 0px;
  resize: none;
  outline: none;
  width: 70%;
  box-shadow: 5px 5px 5px 5px #ddd;
  height: 100px;
`;

const PostFootForm = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  color: black;
  box-shadow: 5px 5px 5px 0px #ddd;
  display: flex;
  width: 150px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background: #e9e9e9;
`;

const BtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  width: 70%;
  justify-content: flex-end;
`;

const Button = styled.button`
  box-shadow: 5px 5px 5px 0px #ddd;
  border: 0px;
  margin-left: 10px;
  outline: none;
  color: white;
`;

const DailyForm = () => {
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");
  const dispatch = useDispatch();
  const { dailyPostDone } = useSelector((state) => state.daily);

  useEffect(() => {
    if (dailyPostDone) {
      setTitle("");
      setContent("");
    }
  }, [dailyPostDone]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: DAILY_POST_REQUEST,
        data: {
          dailyTitle: title,
          dailyContent: content,
        },
      });
    },
    [title, content]
  );
  return (
    <>
      <Container>
        <PostForm onSubmit={onSubmit}>
          <PostTitle>
            <PostInput
              placeholder="Title"
              value={title}
              onChange={onChangeTitle}
              required
            />
          </PostTitle>
          <PostItem>
            <PostTextarea
              value={content}
              onChange={onChangeContent}
            ></PostTextarea>
          </PostItem>
          <PostFootForm>
            <div>
              <input type="file" id="fileUpload" style={{ display: "none" }} />
              <Label htmlFor="fileUpload">파일업로드</Label>
            </div>
            <BtnBox>
              <Button type="submit" style={{ background: "navy" }}>
                작성
              </Button>
              <Button style={{ background: "orange" }}>취소</Button>
            </BtnBox>
          </PostFootForm>
        </PostForm>
      </Container>
    </>
  );
};

export default DailyForm;
