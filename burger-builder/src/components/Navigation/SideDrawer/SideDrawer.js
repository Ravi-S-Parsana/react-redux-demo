import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Ahoc from '../../../hoc/Ahoc';

const SideDrawer = (props) => {
  let attachedClass = [classes.SideDrawer, classes.Close];
  if(props.open) {
    attachedClass = [classes.SideDrawer, classes.Open];
  }
  return(
  <Ahoc>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClass.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Ahoc>
  );
};

export default SideDrawer;
