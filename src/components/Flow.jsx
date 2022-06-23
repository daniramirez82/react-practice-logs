/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef,useEffect} from 'react';
import BallChecked from './ui/flow/BallChecked';
import './Flow.css';
import Line from './ui/flow/Line';
import LineDoted from './ui/flow/LineDoted';
import CircleActive from './ui/flow/CircleActive';
import PropTypes from 'prop-types';
import CircleDisabled from './ui/flow/CircleDisabled';
import Breadcrums from './ui/flow/Breadcrums'


export default function Flow({activeNumber, totalNumber}) {

  if(activeNumber >totalNumber) activeNumber = totalNumber;

  const wrapper = useRef(null);
  let disabled= [];

  useEffect(()=>{
    console.log('width: ', wrapper.current ? wrapper.current.offsetWidth : 0 );
    
  },[wrapper.current]);

  const checked = [...Array(activeNumber-1)].map((item, index)=>{return(<><BallChecked key={index.toString()}/><Line/></>)});
  
    for (let i = activeNumber; i  < totalNumber; i++) {
      disabled = [...disabled, <><LineDoted/><CircleDisabled number={i+1} /></>]
    }



  return (
    <><div ref={wrapper} className="wrapper-flow">
      <div className="flow">
        {checked}
        <CircleActive activeNumber={activeNumber} />
        {disabled}
      </div>
    </div><Breadcrums actualStep={activeNumber} totalSteps = {totalNumber} /></>

  );
}

Flow.prototype = {
  activeNumber: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
}
