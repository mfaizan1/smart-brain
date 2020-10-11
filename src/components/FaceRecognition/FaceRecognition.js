import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
   {boxes.map(elem => (
        <div className='bounding-box' style={{top: elem.topRow, right: elem.rightCol, bottom: elem.bottomRow, left: elem.leftCol}}></div>
   ))}
      </div>
    </div>
  );
}

export default FaceRecognition;