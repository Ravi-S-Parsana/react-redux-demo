import React from 'react';
import classes from './BuildControl.css';

const buildControl = () =>(
      <div className={classes.BuildControl}>
          <div className = {classes.Label}>{props.igLabel}</div>
          <button className = {classes.Remove}>Remove</button>
           <button className = {classes.Add}>Add</button>
      </div>
);

export default buildControl;
