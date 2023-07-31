import React from 'react';
import './Navbar';

const Experience3D = () => {

  return (
    <>
      <div className='aframe'>

        <a-scene>
          <a-entity id="camera" camera="active: true" look-controls position="0 1.6 0" light="type: point; color: white; intensity: 3"></a-entity>
          <a-entity position="-0.49 0.775 -0.561" rotation="1 40 1" scale="0.5 0.5 0.5" gltf-model="./img/649a87b826b8129313c82570.glb" href="/imgavatar"></a-entity>
          <a-box id="img" position="-0.43485 1.27955 -0.47527" rotation="1 40 1" scale="0.4 0.1 0.00001" material="" geometry="" src="./img/images.png"></a-box>
          <a-assets >
            <img id="img" src="./img/crunchify.png" alt="" />
          </a-assets>
          <a-image src="#img" position="-0.3 1.48 -1.20" rotation="7 42 -0.1" scale="0.3 0.2 0.00001"></a-image>

          <a-entity position="-0.41134 1.11797 -1.371" rotation="1 40 1" scale="0.5 0.5 0.5" gltf-model="./img/Desk.glb" href="/imgavatar"></a-entity>


          <a-assets id="scene">
            <img href="/imgavatar" id='imgavatar' src="./img/appreact111.png" alt="" />
            <img id='imgavatar1' src="./img/crunchify.png" alt="" />
            <img id='imgavatar2' src="./img/movieland.png" alt="" />
            <img id='imgavatar3' src="./img/1.jpeg" alt="" />
            <img id='imgavatar4' src="./img/apigames1.png" alt="" />
            <img id='imgavatar5' src="./img/222.png" alt="" />
            <img id='imgavatar6' src="./img/viajes.png" alt="" />
          </a-assets>

          <a-image src="#imgavatar"
            // clickhandler="txt:image1"
            // onclick="myFunction(animation=property: rotation; to: 0 360 0; loop: tru 5000)"
            animation="property:rotation.y;from:0;to:360;
            dur:8000;dir:normal;loop:true;easing:linear;"
            position="3 5 -5"
            wigth="1"
            height="1"
            scale="2 2 1" >

          </a-image>

          <a-image src="#imgavatar1"
            position="-4 3.5 -3"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar2"
            position="1 2.5 -4"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar3"
            position="-1 5 -7"
            wigth="1"
            scale="2 2 -1">
          </a-image>


          <a-image src="#imgavatar4"
            position="-3 2 -6"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-image src="#imgavatar5"
            animation="property:rotation.y;from:0;to:360;
          dur:8000;dir:normal;loop:true;easing:linear;"
            position="-5 5 -8"
            wigth="2"
            scale="3 2 -1">
          </a-image>

          <a-image src="#imgavatar6"
            position="4 3 -4"
            wigth="1"
            scale="2 2 1">
          </a-image>

          <a-camera>
            <a-cursor></a-cursor>
          </a-camera>

          <a-sky src="https://cdn.glitch.global/dfc8eacd-6caa-44ba-bf5f-563114f6b04e/holographic_mountain_sky_galaxy.jpg?v=1689079816219"></a-sky>

        </a-scene>

      </div>



    </>
  )
}

export default Experience3D