import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const BoardContent = ({ boardData }) => {
    return (
        <>
            <div>
                {boardData.split(/(#[^\s#]+)/g).map((v, i) => {
                    if (v.match(/(#[^\s#]+)/)) {
                        return (
                            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
                                <a>{v}</a>
                            </Link>
                        );
                    }
                    return v;
                })}
            </div>
        </>
    );
};

BoardContent.propTypes = {
    boardData: PropTypes.string.isRequired,
};

export default BoardContent;
