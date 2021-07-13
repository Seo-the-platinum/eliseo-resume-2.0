
import React, { Component } from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background: rgb(227, 230, 228, .9);
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 50%;
  width: 47%;
  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    width: 100%;
  };
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
const WorkList= styled.div`
  display: flex;
  flex-direction: column;
`
const WorkExp= styled.div`
  align-items: flex-end;
  display: flex;
  font-family: 'PT Sans Narrow', sans-serif;
  width: 100%;
  justify-content: space-around;
  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    width: 100%;
  };
`
const WorkTitle= styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'PT Sans Narrow', sans-serif;
  padding-left: 10px;
  @media (min-width: 381px) and (max-width: 600px) {
    align-items: center;
  }
`
class WorkHistory extends Component {
  render() {
    return(
      <Container>
        <Header>
          Work History
        </Header>
        <WorkList>
          <WorkExp>
            <h2 style={{margin: 0}}>
              AT&T
            </h2>
              <p style={{margin: 0}}>
              June 2013- Present
              </p>
          </WorkExp>
          <WorkTitle>
            <h3>
              Premises Technician
            </h3>
            <p>
              Installed and repaired internet, television, and phone services. Worked with
              cat5, coax, and fiber optic wiring.
            </p>
          </WorkTitle>
        </WorkList>
      </Container>
    )
  }
}

export default WorkHistory
