import React, { Component } from 'react';
import styled from 'styled-components';

const Container= styled.div`
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 65px;
  margin: 5px;
  box-shadow: 5px 5px 20px grey;
`

const SilverSlant= styled.div`
  border-right: solid black 1px;
  background: rgb(227, 230, 228, .9);
  height: 100%;
  position: relative;
  left: 2.5%;
  -webkit-transform: skewX(-30deg);
  width: .5%;
  box-sizing: border-box;
  @media (min-width: 320px) {
    left: 5%;
    width: 1%;
  }
`

const Slant= styled.div`
  border-left: solid 1px white;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
  -webkit-transform: skewX(-30deg);
  position: relative;
  left: 2.5%;
  width: 6%;
  background: rgb(0, 196, 132);
  height: 100%;
  box-sizing: border-box;
  @media (min-width: 320px) {
    width: 10.5%;
    left: 5%;
  }
`
const RightBanner= styled.div`
  background: rgb(0, 196, 132);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-top: solid 1px white;
  border-right: solid 1px white;
  border-bottom: solid 1px white;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 24px;
  width: 30%;
  height: 100%;
  @media ( min-width: 320px) {
    width: 50%;
  }
`

class Header extends Component {
  render() {
    return (
      <Container>
        <SilverSlant />
        <Slant />
        <RightBanner>
          Eliseo Flores
        </RightBanner>
      </Container>
    )
  }
}

export default Header
