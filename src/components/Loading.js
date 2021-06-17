import React from 'react'

import "../styles/Loading.css"
// import GifLoading from "../images/graphics-design-lottie-animation.gif"
import GifLoading from "../images/ux-design.gif";

const Loading = () => {
    return (
      <div className="loading">
        <img
          src={GifLoading}
          className="images"
          alt="loading..."
        />
      </div>
    );
}

export default Loading