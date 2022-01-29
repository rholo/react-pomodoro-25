import React from 'react';
import RoundButton from './RoundButton';

const Controls = ({ name = '', timer, subtract, add }) => {
  return (
    <div className="text-center m-5">
      <h5 id={`${name.toLowerCase()}-label`}>{`${name}`}</h5>
      <div className="d-flex justify-content-center align-items-center flex-row-reverse">
        <RoundButton onClick={() => add()}>M</RoundButton>
        <RoundButton onClick={() => subtract()}>L</RoundButton>
        <p>{timer}</p>
        <RoundButton onClick={() => subtract()}>R</RoundButton>
      </div>
    </div>
  );
};

export default Controls;
