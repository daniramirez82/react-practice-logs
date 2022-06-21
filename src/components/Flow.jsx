import React from 'react';
import BallChecked from './ui/flow/BallChecked';
import './Flow.css';
import Line from './ui/flow/Line';
import LineDoted from './ui/flow/LineDoted';
import CircleActive from './ui/flow/CircleActive';
import PropTypes from 'prop-types';
import CircleDisabled from './ui/flow/CircleDisabled';

export default function Flow({activeNumber, totalNumber}) {

  const checked = [...Array(activeNumber-1).fill(<><BallChecked /><Line widthLine={'25'}/></>)]
  const disabled = [...Array(totalNumber-activeNumber).fill(<> <LineDoted widthLine={'25'}/> <CircleDisabled number={totalNumber} /></>)]


  return (
    <div className="wrapper-flow">
      <div className="flow">
        {checked}
        <CircleActive activeNumber={activeNumber}/>
        {disabled}
      </div>
    </div>
  );
}

Flow.prototype = {
  activeNumber: PropTypes.number.isRequired,
  totalNumber: PropTypes.number.isRequired,
}
