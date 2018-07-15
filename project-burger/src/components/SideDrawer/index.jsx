import React from 'react';

import Logo from '../Logo';
import NavigationItems from '../NavigationItems';

import classes from './index.css';

const sideDrawer = (props) => {
  return (
    <div className={classes.sideDrawer}>
    <div className={classes.Logo}>
      <Logo />
    </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;