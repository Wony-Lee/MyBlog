import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "@emotion/styled";

const CloseUpForm = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5000;
  background-color: rgba(0, 0, 0, 1);
`;

const CloseTitle = styled.div`
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
`;

const CloseMain = styled.div`
  border: 1px solid red;
  height: calc(100% --44px);
`;

const ImageWrapper = styled.div`
  text-align: center;
  & img {
    margin: 0 auto;
    max-height: 600px;
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
            <Slider
              initialSlide={0}
              afterChange={(item) => setCurrentSlide(item)}
              infinite
              arrows={true}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {images.map((img) => (
                <ImageWrapper key={img.src}>
                  <img src={`http://localhost:4444/${img.src}`} alt={img.src} />
                </ImageWrapper>
              ))}
            </Slider>
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
