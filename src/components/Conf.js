import React, { Component } from 'react';
import ConfItem from './ConfItem';
import PropTypes from 'prop-types';

class Conf extends Component {
    render() {
        return this.props.conf.map((confItem) => (
            <React.Fragment>
                <ConfItem key={confItem.id} confItem={confItem} />
            </React.Fragment> 
        ));
    }
}

// PropTypes
Conf.propTypes = {
    conf: PropTypes.array.isRequired,
}

export default Conf;
