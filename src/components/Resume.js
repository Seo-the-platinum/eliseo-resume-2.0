import React, { Component } from 'react'
import styled  from 'styled-components'
import Header from './Header'
import Contact from './Contact'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import WorkHistory from './WorkHistory'

const Container= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 5px;
`
const Body= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
const HalfBody= styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  @media (min-width: 320px) and (max-width: 380px) {
    align-items: center;
    flex-direction: column;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    align-items: center;
    flex-direction: column;
  };
`
  class Resume extends Component {
    render() {
      return (
        <Container>
          <Header />
          <Contact />
          <Body>
            <Skills />
            <Projects />
            <HalfBody>
            <Education />
            <WorkHistory/>
            </HalfBody>
          </Body>
        </Container>
      )
    }
  }

export default Resume
