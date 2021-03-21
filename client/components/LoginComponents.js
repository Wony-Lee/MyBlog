import React from "react";
import styled from "@emotion/styled";

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const LoginForm = styled.div`
  margin-top: 10%;
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LoginTableForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LoginTable = styled.table`
  border: 1px solid black;
  width: 350px;
  height: 150px;
`;

const LoginComponents = () => {
  return (
    <>
      <LoginLayout>
        <LoginForm>
          <h1>로그인</h1>
          <LoginTableForm>
            <LoginTable>
              <tr>
                <td>아이디</td>
                <td>
                  <input />
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td>
                  <input type="password" />
                </td>
              </tr>
              <tr>
                <td>
                  <button>로그인</button>
                </td>
                <td>
                  <button>돌아가기</button>
                </td>
              </tr>
            </LoginTable>
          </LoginTableForm>
        </LoginForm>
      </LoginLayout>
    </>
  );
};

export default LoginComponents;
