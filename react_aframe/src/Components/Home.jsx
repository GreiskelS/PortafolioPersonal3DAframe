import React from 'react';
import './Navbar';
import './Footer';
import './css/Home.css';
import Portafolio from './Portafolio';

const Home = () => {
  return (
    <div>
      <a-scene>
        <a-sphere id="home" position="-5 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="-9 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="-1 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="3 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="7 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="11 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="15 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>
        <a-sphere id="home" position="-13 5 -9.8394" scale="1 1 1" radius="1.25" color="white" animation="property: rotation; to: 0 360 0; loop: true; dur: 5000" gltf-model="./img/Yellow Box.glb"></a-sphere>

        <a-sky src="./img/holographic_landscape.jpg"></a-sky>

        <a-assets id="scene">
          <img id='logo' src="./img/symfony_black_03.png" alt="" />
          <img id='logo0' src="./img/GitHub-logo.png" alt="" />
          <img id='logo1' src="./img/php_logo.png" alt="" />
          <img id='logo2' src="./img/JavaScript-Symbol.png" alt="" />
          <img id='logo3' src="./img/wordpress.png" alt="" />
          <img id='logo4' src="./img/html.png" alt="" />
          <img id='logo5' src="./img/png-clipart-css3-badge-blue-and-white-css-icon-thumbnail.png" alt="" />
          <img id='logo6' src="./img/MySQL-logo.png" alt="" />
        </a-assets>

        <a-image src="#logo"
          position="-5 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo0"
          position="-9 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo1"
          position="-1 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo2"
          position="3 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo3"
          position="7 7 -9.8394"
          wigth="1"
          scale="2 2 1"
        >

        </a-image>

        <a-image src="#logo4"
          position="11 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo5"
          position="-13 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>

        <a-image src="#logo6"
          position="15 7 -9.8394"
          wigth="1"
          scale="2 2 1">
        </a-image>
      </a-scene>
      <Portafolio />

    </div>
  )
}

export default Home