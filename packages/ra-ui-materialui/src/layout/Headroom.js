import React from 'react';
import Headroom from 'react-headroom';

const styleHeadroom = {
    position: 'fixed',
};

const HeadroomCustom = props => <Headroom style={styleHeadroom} {...props} />;

export default HeadroomCustom;
