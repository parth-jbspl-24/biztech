import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';

const defaultStyle = {
    position: 'fixed',
    zIndex: 1300,
};

const HeadroomCustom = ({ style, children }) => (
    <Headroom style={{ ...defaultStyle, ...style }}>{children}</Headroom>
);

HeadroomCustom.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

HeadroomCustom.defaultProps = {
    style: {},
};

export default HeadroomCustom;
