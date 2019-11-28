import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Container from './components/Container/Container';
import LeftNav from './components/LeftNav/LeftNav';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Container>

        <LeftNav />
        <Main />

      </Container>
    </>
  );
}

export default App;
