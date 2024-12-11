import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import RecipesMenu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav/>

      <Header
        title="Little Lemon"
        sub_title="Chicago"
        content="We are a family owned Mediterraneran restaurnat, focused on traditional recipes servred with a mondern twist."
        button_text = "Reserve Table"
      />

      <RecipesMenu/>

      <Footer/>
    </>
  );
}

export default App;
