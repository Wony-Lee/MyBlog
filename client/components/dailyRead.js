import React from "react";
import styled from "@emotion/styled";

const DailyContent = styled.div`
  border: 1px solid white;
`;

const DailyForm = styled.div`
  border: 1px solid red;
`;

const DailyRead = () => {
  return (
    <>
      <DailyContent>
        <DailyForm></DailyForm>
      </DailyContent>
    </>
  );
};

export default DailyRead;
