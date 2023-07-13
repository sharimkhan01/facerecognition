import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="form-heading">
        {"This Magic Brain will detect faces in your picture.Give it a try."}
      </p>
      <div className="center">
        <div className="form-inner-container">
          <input className="form-input" type="text" />
          <button className="form-input-button">Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
