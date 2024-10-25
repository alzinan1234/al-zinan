"use client";
import React from "react";

class TextChangeAnimation extends React.Component {
  constructor() {
    super();
    this.state = {
      textIndex: 0,
      texts: [
        "Web Developer",
        "Software Developer",
        "Front End Developer",
        "Web Designer",
        "Creative Person",
      ],
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        textIndex: (prevState.textIndex + 1) % this.state.texts.length,
      }));
    }, 2000); // Change text every 2 seconds (adjust as needed)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currentText = this.state.texts[this.state.textIndex];

    return (
      <div className="text-box flex">
        <div className="changing-text flex px-12 font-[800] roboto-box-title  text-[40px]">
          {currentText}
        </div>
      </div>
    );
  }
}

export default TextChangeAnimation;
