import React, { Component } from 'react';
import HackItem from './HackItem';
import PropTypes from 'prop-types';

class Hack extends Component {
    render() {
        return this.props.hack.map((hackItem) => (
            <HackItem key={hackItem.id} hackItem={hackItem} /> 
        ));
    }
}

// PropTypes
Hack.propTypes = {
    hack: PropTypes.array.isRequired,
}

export default Hack;
