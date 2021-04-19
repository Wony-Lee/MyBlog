import React, { useCallback, useState } from "react";
import useInput from "../hooks/useInput";
import AppLayout from "../components/AppLayout";
import styled from "@emotion/styled";

const SignContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  justify-content: center;
`;

const SignUpForm = styled.form`
  width: 70%;
  height: 500px;
  text-align: center;
`;

const TextLabel = styled.label`
  color: white;
  margin: 0;
  display: block;
`;

const SignInput = styled.input`
  outline: none;
  margin-bottom: 20px;
`;

const ErrorDiv = styled.div`
  color: red;
  margin-bottom: 15px;
`;

const SignUp = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
  }, []);

  return (
    <>
      <AppLayout>
        <SignContainer>
          <SignUpForm onSubmit={onSubmit}>
            <div>
              <TextLabel htmlFor="user-email">이메일</TextLabel>
              <SignInput
                type="email"
                name="user-email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>
            <div>
              <TextLabel htmlFor="user-password">비밀번호</TextLabel>
              <SignInput
                type="password"
                name="user-password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
            <div>
              <TextLabel htmlFor="user-password-check">비밀번호 확인</TextLabel>
              <SignInput
                type="password"
                name="user-password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
              {passwordError && (
                <ErrorDiv>비밀번호가 일치하지않습니다.</ErrorDiv>
              )}
            </div>
            <div>
              <TextLabel htmlFor="user-nickname">닉네임</TextLabel>
              <SignInput
                type="text"
                name="user-nickname"
                value={nickname}
                onChange={onChangeNickname}
              />
            </div>
            <div>
              <SignInput
                type="checkbox"
                name="user-term"
                checked={term}
                onChange={onChangeTerm}
              />
              <span style={{ color: "white" }}>가입하는 것에 대한 동의</span>
              {termError && <ErrorDiv>약관에 동의해주셔야 합니다.</ErrorDiv>}
            </div>
            <div>
              <button type="submit" style={{ marginRight: "10px" }}>
                가입하기
              </button>
              <button type="reset">돌아가기</button>
            </div>
          </SignUpForm>
        </SignContainer>
      </AppLayout>
    </>
  );
};

export default SignUp;
