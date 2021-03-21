import React from "react";
import styled from "@emotion/styled";

const GuestLayout = styled.div`
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
`;

const GuestContent = () => {
  return (
    <>
      <GuestLayout>
        <div>방명록 컨텐츠</div>
      </GuestLayout>
    </>
  );
};

export default GuestContent;
