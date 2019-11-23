import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends Component {
    render() {
        return this.props.list.map((listItem) => (
            <React.Fragment>
                <ListItem key={listItem.id} listItem={listItem} />                 
            </React.Fragment>
        ));
    }
}

// PropTypes
List.propTypes = {
    list: PropTypes.array.isRequired,
}

export default List;
