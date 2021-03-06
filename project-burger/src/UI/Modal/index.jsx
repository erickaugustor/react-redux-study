import React from 'react';

import Aux from '../../services/wrapper';
import Backdrop from '../Backdrop';

import classes from './index.css';

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      { props.children }
    </div>
  </Aux>
);

export default modal;