import React from 'react';
import BuildCotrol from '../BuildControl';

import classes from './index.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.buildControls}>
    { 
      controls.map(ctrl => (
        <BuildCotrol key={ctrl.label} label={ctrl.label} />
      ))
    }
  </div>
);

export default buildControls;