import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  img.heading {
    display: flex;
    margin: 0 auto;
    width: 75%;
    margin-bottom: 40px;
  }
  div.flex {
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    align-items: flex-end;
  }
  img.animal {
    height: 110px;
  }
  img.man {
    height: 150px;
  }
  div.maze {
    position: relative;
    width: 450px;
    height: 450px;
    display: flex;
    margin: 0 auto;
    background: url("https://res.cloudinary.com/rajatvijay/image/upload/v1569589354/maze_game/8.png");
    background-size: cover;
  }
`;

const Point = styled.div`
  position: absolute;
  width: 52px;
  height: 36px;
  background: url("https://res.cloudinary.com/rajatvijay/image/upload/v1569588376/maze_game/4.png");
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default class MazeRunner extends Component {
  state = {
    top: 56,
    left: 83
  };
  componentDidMount() {
    const maze = document.getElementById("maze-runner");
    console.log(maze.offsetLeft, maze.offsetTop);

    window.addEventListener("keydown", event => {
      if (event.keyCode === 37) {
        this.setState({
          left: Math.abs(30 - this.state.left)
        });
      }
      if (event.keyCode === 39) {
        this.setState({
          left: Math.abs(30 + this.state.left)
        });
      }
      if (event.keyCode === 38) {
        this.setState({
          top: Math.abs(45 - this.state.top)
        });
      }
      if (event.keyCode === 40) {
        this.setState({
          top: Math.abs(45 + this.state.top)
        });
      }
    });
  }
  moveAnimal = e => {
    setInterval(this.updatePosition(e), 1);
  };
  updatePosition = e => {
    if (e.keycode === 37) {
      console.log("left");
    }
  };

  render() {
    const { top, left } = this.state;

    return (
      <Container>
        <img
          src="https://res.cloudinary.com/rajatvijay/image/upload/v1569587173/maze_game/1_mobile.png"
          className="heading"
        ></img>
        <div className="flex">
          <img
            src="https://res.cloudinary.com/rajatvijay/image/upload/v1569588376/maze_game/4.png"
            className="animal"
          ></img>
          <img
            src="https://res.cloudinary.com/rajatvijay/image/upload/v1569588882/maze_game/5.png"
            className="man"
          ></img>
        </div>

        <div className="maze">
          <Point
            id="maze-runner"
            className="point"
            top={top}
            left={left}
            onKeyDown={e => this.moveAnimal(e)}
          ></Point>
        </div>

        <div className="flex">
          <img
            src="https://res.cloudinary.com/rajatvijay/image/upload/v1569589136/maze_game/7.png"
            className="man"
          ></img>
          <img
            src="https://res.cloudinary.com/rajatvijay/image/upload/v1569589193/maze_game/6.png"
            className="animal"
          ></img>
        </div>
      </Container>
    );
  }
}
