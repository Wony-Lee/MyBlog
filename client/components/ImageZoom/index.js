import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div>
        <div>
          <h1>상세이미지</h1>
        </div>
        <div>
          <div>
            <Slick
              initialSlide={0}
              beforeafterChange={(slide) => setCurrentSlide(slide)}
              infinite
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {images.map((v) => (
                <ImageWrapper key={v.src}>
                  <img src={`http://localhost:4444/${v.src}`} alt={v.src} />
                </ImageWrapper>
              ))}
            </Slick>
            <div>
              <div>
                {currentSlide + 1}
                {""}/{images.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
