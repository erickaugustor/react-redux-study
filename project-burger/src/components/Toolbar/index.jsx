import React from 'react';

import Logo from '../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../DrawerToggle';

import classes from './index.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;