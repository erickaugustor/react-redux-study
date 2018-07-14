import React from 'react';

import Aux from '../../services/wrapper';
import classes from './index.css';

const layout = (props) => (
  <Aux>
    <div>
      Toolbar, SideDrawerm, Backdrop.
    </div>
    <main className={classes.content}>
      {props.children}
    </main>
   </Aux>
);

export default layout;