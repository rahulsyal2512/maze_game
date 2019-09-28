import React, { Component } from "react";
import styled from "styled-components";
import { path } from "./runnerPath";

const Container = styled.div`
  width: 100%;

  img.heading {
    display: flex;
    margin: 0 auto;
    width: 40%;
    margin-bottom: 20px;
  }
  div.flex {
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    align-items: flex-end;
  }
  img.animal {
    height: 80px;
  }
  img.man {
    height: 100px;
  }
  div.maze {
    width: 420px;
    height: 420px;
    display: flex;
    margin: 0 auto;
    background: url("https://res.cloudinary.com/rajatvijay/image/upload/v1569589354/maze_game/8.png");
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
  div.boundary {
    position: relative;
    width: 342px;
    height: 320px;
    margin-top: -5px;
    margin-left: 8px;
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
    top: 0,
    left: 25
  };
  componentDidMount() {
    const maze = document.getElementById("maze-runner");
    window.addEventListener("keydown", event => {
      var nextLeftPosition;
      var nextTopPosition;
      var checkPosition = [];
      if (event.keyCode === 37) {
        nextLeftPosition = Math.abs(4 - this.state.left);
        nextTopPosition = this.state.top;
      }
      if (event.keyCode === 39) {
        nextLeftPosition = Math.abs(4 + this.state.left);
        nextTopPosition = this.state.top;
      }
      if (event.keyCode === 38) {
        nextTopPosition = Math.abs(4 - this.state.top);
        nextLeftPosition = this.state.left;
      }
      if (event.keyCode === 40) {
        nextTopPosition = Math.abs(4 + this.state.top);
        nextLeftPosition = this.state.left;
      }
      checkPosition = path.filter(path => {
        if (path.left === nextLeftPosition && path.top === nextTopPosition) {
          return path;
        }
      });
      if (checkPosition.length !== 0) {
        if (event.keyCode === 37) {
          this.setState({
            left: Math.abs(4 - this.state.left)
          });
        }
        if (event.keyCode === 39) {
          this.setState({
            left: Math.abs(4 + this.state.left)
          });
        }
        if (event.keyCode === 38) {
          this.setState({
            top: Math.abs(4 - this.state.top)
          });
        }
        if (event.keyCode === 40) {
          this.setState({
            top: Math.abs(4 + this.state.top)
          });
        }
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
          <div className="boundary">
            <Point
              id="maze-runner"
              className="point"
              top={top}
              left={left}
              onKeyDown={e => this.moveAnimal(e)}
            ></Point>
          </div>
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
