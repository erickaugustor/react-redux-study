import React from 'react';

import Aux from '../../services/wrapper';
import Toolbar from '../Toolbar';
import SideDrawer from '../SideDrawer';

import classes from './index.css';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>
      {props.children}
    </main>
   </Aux>
);

export default layout;