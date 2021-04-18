import React from "react";
import styled from "@emotion/styled";
import DailyForm from "./dailyForm";
import DailyPost from "./dailyPost";

const Container = styled.div`
  height: 100%;
  padding: 5% 20%;
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
