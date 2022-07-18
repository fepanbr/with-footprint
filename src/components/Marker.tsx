import React from 'react';
import marker from '../assets/icon/icons8-marker-64.png';

const Marker = ({lat, lng}: any) => (
  <div>
    <img style={{width: '30px', height: '30px'}} src={marker} alt="" />
  </div>
)
export default Marker;