import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';

import classes from './index.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My Burger" />
  </div>
);

export default logo;