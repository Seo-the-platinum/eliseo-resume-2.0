import React, { Component } from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub  } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'


const Container= styled.div`
  background: rgb(227, 230, 228, .9);
  border: solid 1px black
  box-shadow: 5px 5px 10px grey;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 95%;
  @media (min-width: 320px) and (max-width: 380px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 150px;
  };
`
const Header= styled.div`
  background: rgb(0, 196, 132);
  display: flex;
  justify-content: center;
  border-bottom: solid 1px black;
  font-weight: bold;
  font-size: 24px;
  font-family: 'PT Sans Narrow', sans-serif;
  padding-bottom: 5px;
  width: 100%;
`
const SkillsList= styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  @media (min-width: 320px) and (max-width: 380px) {
    flex-wrap: wrap;
    height: 70%;
    padding: 5px;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    flex-wrap: wrap;
    height: 70%;
    padding: 10px;
  }
`
const Skill= styled.div`
  display: flex;
  align-items: center;
`

class Skills extends Component {
  render() {
    return (
      <Container>
        <Header>
          Skills
        </Header>
        <SkillsList>
          <Skill>
            <FaHtml5 size={32} color='E44D26'/>
              Html
          </Skill>
          <Skill>
            <FaCss3Alt size={32} color='#264de4'/> Css
          </Skill>
          <Skill>
            <IoLogoJavascript size={32}/> Javascript
          </Skill>
          <Skill>
            <FaReact size={32} color='61DBFB'/>React
          </Skill>
          <Skill>
            <FaReact size={32} color='61DBFB'/>React Native
          </Skill>
          <Skill>
            Redux
          </Skill>
          <Skill>
            <FaGithub size={32}/>
            Git
          </Skill>
        </SkillsList>
      </Container>
    )
  }
}

export default Skills
