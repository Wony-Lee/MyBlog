import React from "react";

import styled from "@emotion/styled";
import GuestPost from "./guestPost";

const GuestLayout = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
`;
const GuestBox = styled.div`
  display: flex;
  justify-content: center;
`;

const guestForm = () => {
  return (
    <>
      <GuestLayout>
        <GuestBox>
          <GuestPost></GuestPost>
        </GuestBox>
      </GuestLayout>
    </>
  );
};

export default guestForm;
