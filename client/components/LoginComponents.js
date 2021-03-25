import React, { useCallback } from "react";
import Router from "next/router";
import styled from "@emotion/styled";
import { loginAction, logoutAction } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const LoginForm = styled.form`
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
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(id, password);
      dispatch(loginAction({ id, password }));
    },
    [id, password]
  );

  const onLogout = useCallback((e) => {
    e.preventDefault();
    dispatch(logoutAction());
  });

  return (
    <>
      <LoginLayout>
        <LoginForm onSubmit={onSubmit}>
          {isLoggedIn ? (
            <div>
              <button onClick={onLogout}>로그아웃</button>
            </div>
          ) : (
            <div>로그인 되지 않았습니다.</div>
          )}
          <h1>로그인</h1>
          <LoginTableForm>
            <LoginTable>
              <tbody>
                <tr>
                  <td>아이디</td>
                  <td>
                    <input
                      id="user-id"
                      value={id}
                      onChange={onChangeId}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td>
                    <input
                      type="password"
                      id="user-password"
                      value={password}
                      onChange={onChangePassword}
                      required
                    />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button type="submit">로그인</button>
                  </td>
                  <td>
                    <button>돌아가기</button>
                  </td>
                </tr>
              </tfoot>
            </LoginTable>
          </LoginTableForm>
        </LoginForm>
      </LoginLayout>
    </>
  );
};

export default LoginComponents;
