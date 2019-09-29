import React, { Component } from "react";
import styled, { keyframes, css } from "styled-components";
import { path, returnPath1, returnPath2 } from "./runnerPath";

const Container = styled.div`
  width: 100%;

  img.heading {
    display: flex;
    margin: 0 auto;
    width: 40%;
    margin-bottom: 10px;
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
    position: relative;
    width: 420px;
    height: 420px;
    display: flex;
    margin: 0 auto;
    background: url("https://res.cloudinary.com/rajatvijay/image/upload/v1569589354/maze_game/8.png");
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
`;

export default class MazeRunner extends Component {
  state = {
    top: 20,
    left: 69,
    path: {},
    success: false,
    moveBack: false
  };
  frames = (length, path) => {
    let arr = [];
    for (let i = 0; i < path.loop; i++) {
      let percent = `${length * i}%`;
      arr.push(
        `${percent} { left: ${path.value[i].left}px; top: ${path.value[i].top}px; }`
      );
    }
    arr.push(`100% {left: 69px; top : 20px;}`);
    console.log(arr);
    // this.setState({
    //   left: 69,
    //   top: 20,
    //   moveBack: false
    // });
    return arr;
  };

  moveBack = path => {
    const length = path.value.length / path.division;
    return keyframes`
      ${this.frames(length, path).map(frame => frame)}
  `;
  };

  animations = value => css`
    ${this.moveBack(value)} 3s forwards;
  `;

  componentDidMount() {
    const maze = document.getElementById("maze-runner");
    window.addEventListener("keydown", event => {
      //left down left 45 top 364
      var nextLeftPosition;
      var nextTopPosition;
      var checkPosition = [];

      if (this.state.left === 329 && this.state.top === 4) {
        this.setState({
          moveBack: true,
          path: {
            name: "returnPath2",
            value: returnPath2,
            loop: 169,
            division: 340
          }
        });
      }

      if (this.state.left === 45 && this.state.top === 364) {
        this.setState({
          moveBack: true,
          path: {
            name: "returnPath1",
            value: returnPath1,
            loop: 419,
            division: 1800
          }
        });
      }

      if (this.state.left === 301 && this.state.top === 364) {
        this.props.history.push("/completed");
      }

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
      // if (checkPosition.length !== 0) {
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
      // }
    });
  }

  render() {
    const { top, left } = this.state;
    const Point = styled.div`
      position: absolute;
      width: 52px;
      height: 36px;
      background: url("https://res.cloudinary.com/rajatvijay/image/upload/v1569588376/maze_game/4.png");
      top: ${props => props.top}px;
      left: ${props => props.left}px;
      background-size: cover;
      background-repeat: no-repeat;
      -webkit-transition: all 0.2s linear;
      -moz-transition: all 0.2s linear;
      -o-transition: all 0.2s linear;
      -ms-transition: all 0.2s linear;
      opacity: 1;
      -webkit-animation: ${props =>
        props.animation ? this.animations(props.path) : "none"};
      animation: ${props =>
        props.animation ? this.animations(props.path) : "none"};
    `;
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
            animation={this.state.moveBack}
            path={this.state.path}
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
