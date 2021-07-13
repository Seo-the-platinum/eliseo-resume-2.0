import React, { Component } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import { MdEmail, MdPhoneAndroid } from 'react-icons/md'

const Container= styled.div`
  align-items: center;
  border: solid 1px black;
  background: rgb(227, 230, 228, .9);
  display: flex;
  flex-wrap: wrap;
  height: 10%;
  justify-content: space-around;
  width: 95%;
  @media (min-width: 320px) and (max-width: 380px) {
    flex-direction: column;
    align-items: flex-start;
    height: 15%;
  }
  @media (min-width: 381px) and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-end;
  }
`
const Text= styled.p`
  font-size: 18px;
  font-family: 'PT Sans Narrow', sans-serif;
  @media (min-width: 320px) and (max-width: 380px) {
    font-size: 16px;
    padding: 5px;
  };
  @media (min-width: 381px) and (max-width: 600px) {
    font-size: 16px;
    padding: 5px;
  };
`
const Link= styled.a`
  color: rgb(0, 196, 132);
  font-family: 'PT Sans Narrow', sans-serif;
`
class Contact extends Component {
  render() {
    return(
      <Container>
        <Text> <MdPhoneAndroid/> 626-232-1450</Text>
        <Text> <MdEmail /> Eliseo_flores530@yahoo.com</Text>
        <Text> <FaGithub />{ <Link href='https://github.com/Seo-the-platinum'> <FaLink/> </Link> }</Text>
        <Text> <FaLinkedin /> {<Link href='https://www.linkedin.com/in/eliseo-aegon-flores/'><FaLink/></Link>}</Text>
      </Container>
    )
  }
}

export default Contact
