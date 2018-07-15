import React from 'react';

import NavigatioItem from '../NavigationItem';

import classes from './index.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigatioItem link="/" active>
      Burger Builder
    </NavigatioItem>    
    <NavigatioItem link="/">
      Burger Builder
    </NavigatioItem>
  </ul>
);

export default navigationItems;