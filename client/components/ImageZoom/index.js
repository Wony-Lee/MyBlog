import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <div>
        <Slick
          initialSlide={0}
          infinite
          beforeChange={(slide) => setCurrentSlide(slide)}
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
        ></Slick>
      </div>
    </>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
