import React from 'react';
import marker from '../assets/icon/icons8-marker-64.png';

const MarkerStyle = {width: '30px', height: '30px'};

const Marker = ({lat, lng}: any) => (
  <>
  <div style={{backgroundColor: 'white', width: '100px'}}>
    여기에 대한 설명
  </div>
  <div>
    <img style={MarkerStyle} src={marker} alt="" />
  </div>
  </>
)
export default Marker;