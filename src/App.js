import React from 'react';
import './App.css';
import Resume from './components/Resume'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  overflow-x: hidden;
`
function App() {
  return (
    <Container>
      <Resume />
    </Container>
  );
}

export default App;
