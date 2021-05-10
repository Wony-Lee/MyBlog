import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useSelector } from "react-redux";

const HeadTitle = styled.div`
    display: flex;
    color: white;
`;
const TextSpan = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Atag = styled.a`
    color: white;
`;

const ListHeadTitle = () => {
    const user = useSelector((state) => state.user.user?.admin);

    return (
        <>
            <HeadTitle>
                {user === 9 ? (
                    <TextSpan>
                        <Link href="/board/write">
                            <Atag>글작성</Atag>
                        </Link>
                    </TextSpan>
                ) : (
                    <TextSpan>전체글</TextSpan>
                )}
            </HeadTitle>
        </>
    );
};
export default ListHeadTitle;
