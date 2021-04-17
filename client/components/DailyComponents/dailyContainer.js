import React from "react";
import styled from "@emotion/styled";
import DailyForm from "./dailyForm";
import DailyPost from "./dailyPost";

const Container = styled.div`
  border: 1px solid red;
  height: 100%;
  padding: 5% 15%;
`;

const DailyContainer = () => {
  return (
    <>
      <Container>
        <DailyForm />
        <DailyPost />
      </Container>
    </>
  );
};
export default DailyContainer;
