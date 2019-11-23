import React, { Component } from 'react';
import ScholarItem from './ScholarItem';
import PropTypes from 'prop-types';

class Scholar extends Component {
    render() {
        return this.props.scholar.map((scholarItem) => (
            <React.Fragment>
                <ScholarItem key={scholarItem.id} scholarItem={scholarItem} /> 
            </React.Fragment>
        ));
    }
}

// PropTypes
Scholar.propTypes = {
    scholar: PropTypes.array.isRequired,
}

export default Scholar;
