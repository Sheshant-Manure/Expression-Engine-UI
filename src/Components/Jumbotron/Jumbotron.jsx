import React from 'react';
import Bootstraplogo from '../BootstrapLogo/Bootstraplogo';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4 title center">Expression Engine UI</h1>
            <p className="lead center">Built using <Bootstraplogo w = { '20px' } /> Bootstrap</p>
        </div>
    </div>
  )
}

export default Jumbotron;