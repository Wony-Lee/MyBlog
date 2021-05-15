import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import board from "../../../server/models/board";
import { addBoard } from "../../reducer/board";

const SearchForm = styled.div`
    margin-bottom: 30px;
`;

const SearchInput = styled.input`
    border: 1px solid black;
    width: 100%;
`;
const SearchBar = () => {
    const [searchData, setSearchData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const { boardPost } = useSelector((state) => state.board);
    const onKeyEvent = (e) => {
        if (e.key === "Enter") {
            console.log(e.target.value);
            setSearchInput("");
            console.log(boardPost);

            boardPost.map((searchItem) => {
                if (searchItem.boardTitle === searchInput) {
                    console.log(searchItem);
                    console.log(searchInput);
                    console.log("빙고");
                }
            });
        }
    };
    const searchHandler = (e) => {
        setSearchInput(e.target.value);
    };
    return (
        <>
            <SearchForm>
                <label htmlFor="searchData"></label>
                <SearchInput
                    name="searchData"
                    type="text"
                    value={searchInput}
                    placeholder="검색어 입력 후 엔터"
                    onKeyPress={onKeyEvent}
                    onChange={searchHandler}
                />
            </SearchForm>
        </>
    );
};

export default SearchBar;
