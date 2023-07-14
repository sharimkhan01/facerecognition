import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center face-outer-container">
      <div className="face-inner-container">
        <img
          className="face"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
