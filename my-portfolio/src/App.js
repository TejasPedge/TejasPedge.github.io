import logo from './logo.svg';
import './App.css';

import { Box } from '@chakra-ui/react';

import { HStack, Text, Image } from '@chakra-ui/react';

import Navbar from './Component/Navbar';

import Home from './Component/Home';

import About from './Component/About';

import Contact from './Component/Contact';

import Skills from './Component/Skills';

import Projects from './Component/Projects';

import { GithubStats } from './Component/GithubStats';

function App() {
  return (
    <Box  minW = '280px' className="App" color = 'white' bg = 'rgb(1, 16, 27)'>

          <Navbar />

          <Box m = 'auto' w ={{base : '92%', '1120px' : '82%'}} >

              <Home/>

              <About/>

              <Skills/>

              <Projects/>

              <GithubStats />

              <Contact/>  




</Box>


<Image src = 'https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg'></Image>


    </Box>
  );
}

export default App;
