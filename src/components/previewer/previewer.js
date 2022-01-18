import React from 'react';
import './previewer.css';

const Previewer = ({markdown}) => {


    return (
        <div id='preview' className={`previewer`} dangerouslySetInnerHTML={{__html: markdown}}></div>
    );
};

export default Previewer;