import React from "react";

const Loader = (props) => {
  return (
    <div className="LoadingContainer">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
