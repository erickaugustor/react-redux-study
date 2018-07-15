import React from 'react';

import Logo from '../Logo';
import NavigationItems from '../NavigationItems';

import classes from './index.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;