import React from 'react';
import classes from './previewer.module.css';

const Previewer = ({markdown}) => {


    return (
        <div id='preview' className={`${classes['previewer']}`} dangerouslySetInnerHTML={{__html: markdown}}></div>
    );
};

export default Previewer;