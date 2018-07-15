import React from 'react';

import classes from './index.css';

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(' ')}
  >{props.children}</button>
);

export default button;