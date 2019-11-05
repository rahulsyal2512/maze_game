import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  font-size: 29px;
  color: green;
  text-align: center;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  text-align: center;
  background-color: blue;
  border-radius: 5px;
  margin: 50px auto 0px;
  width: 150px;
  height: 60px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 50px;
  :hover {
    cursor: pointer;
  }
`;

class ThankYou extends Component {
  reloadGame = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    return (
      <Container>
        हुर्रे! मैंने अपनी मां को पा लिया है। मेरी मदद करने के लिए धन्यवाद।
        <Button onClick={() => this.reloadGame()}>
          <span>दोबारा खेलें।</span>
        </Button>
      </Container>
    );
  }
}

export default ThankYou;
