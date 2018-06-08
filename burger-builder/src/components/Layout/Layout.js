import React from 'react';

import Ahoc from '../../hoc/Ahoc';
import classes from './Layout.css';

const layout = ( props ) => (
    <Ahoc>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Ahoc>
);

export default layout;
