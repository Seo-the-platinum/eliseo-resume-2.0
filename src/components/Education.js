import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  align-items: center;
  background: rgb(227, 230, 228, .9);
  border: solid 1px black;
  box-shadow: 10px 10px 20px gray;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 47%;
  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    width: 100%;
  };
  @media (min-width: 601px) {
  }
`
const Header= styled.h2`
  background: rgb(0, 196, 132);
  border-bottom: solid 1px black;
  display: flex;
  font-family: 'PT Sans Narrow', sans-serif;
  justify-content: center;
  margin-top: 0;
  width: 100%;
`
const EduList= styled.div`
  display: flex;
  font-family: 'PT Sans Narrow', sans-serif;
  flex-direction: column;
  width: 100%;
`
const EduItem= styled.div`
  align-items: center;
  display: flex;
  font-family: 'PT Sans Narrow', sans-serif;
  flex-direction: column;
`
class Education extends Component {
  render() {
    return (
      <Container>
        <Header> Education </Header>
        <EduList>
          <EduItem>
            <h3>
              Udacity
            </h3>
            <p>
              March 2021- May 2021
            </p>
            <p>
              Full Stack Web Developer
            </p>
          </EduItem>
          <EduItem>
            <h3>
              Udacity
            </h3>
            <p>
              May 2019- September 2019
            </p>
            <p>
              React NanoDegree
            </p>
          </EduItem>
          <EduItem>
            <h3>
              Udacity
            </h3>
            <p>
              January 2018- April 2019
            </p>
            <p>
              Front-End Developer NanoDegree
            </p>
          </EduItem>
          <EduItem>
            <h3>
              Alhambra High School
            </h3>
              <p>
                 2003- 2007
              </p>
              <p> High School Diploma </p>
          </EduItem>
        </EduList>
      </Container>
    )
  }
}

export default Education
