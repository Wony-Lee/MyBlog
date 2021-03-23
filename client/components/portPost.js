import React from "react";
import styled from "@emotion/styled";

const PortPostLayout = styled.div`
  border: 1px solid white;
  display: flex;
  justify-content: center;
  background: white;
`;

const PortPostForm = styled.form`
  border: 1px solid black;
  width: 50%;
  display: flex;
  justify-content: center;
`;

const PortPostContent = styled.div`
  width: 100%;
  padding: 10px;
`;

const PortSubject = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const PortSpan = styled.span`
  margin-right: 30px;
`;

const PortInput = styled.input`
  height: 20px;
  width: 50%;
`;

const PortTextLayout = styled.div`
  width: 100%;
`;

const PortTextArea = styled.textarea`
  resize: none;
  width: 99%;
`;

const PortPost = () => {
  return (
    <>
      <PortPostLayout>
        <PortPostForm>
          <PortPostContent>
            <PortSubject>
              <PortSpan>제목</PortSpan>
              <PortInput type="text" />
            </PortSubject>
            <PortTextLayout>
              <PortTextArea />
            </PortTextLayout>
            <div>
              <div>미리보기</div>
              <input type="file" />
            </div>
            <div>
              <button>작성</button>
              <button>취소</button>
            </div>
          </PortPostContent>
        </PortPostForm>
      </PortPostLayout>
    </>
  );
};

export default PortPost;
