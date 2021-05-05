import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import styled from "@emotion/styled";

const CloseUpForm = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  width: 75%;
  height: 100%;
  z-index: 1;
`;

const CloseTitle = styled.div`
  display: flex;
  flex-direction: column;

  jsutify-content: center;
  align-items: center;
`;

const CloseMain = styled.div`
  width: 100%;

  border: 1px solid red;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  & img {
    width: 50%;
    height: 100%;
    max-width: 1200px;
    max-height: 600px;
    z-index: 50;
    height: 30px;
  }
`;

const CloseFoot = styled.div`
  disaply: flex;
  text-align: center;
  margin: 10px;
`;

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <CloseUpForm>
        <CloseTitle>
          <h1>상세이미지</h1>
          <button onClick={onClose}>닫기</button>
        </CloseTitle>
        <CloseMain>
          <div>
            <Slick
              initialSlide={0}
              beforeafterChange={(slide) => setCurrentSlide(slide)}
              infinite
              arrows={true}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {images.map((v) => (
                <ImageWrapper key={v.src}>
                  <img src={`http://localhost:4444/${v.src}`} alt={v.src} />
                </ImageWrapper>
              ))}
            </Slick>
            <CloseFoot>
              <div>
                {currentSlide + 1}/{images.length}
              </div>
            </CloseFoot>
          </div>
        </CloseMain>
      </CloseUpForm>
    </>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
