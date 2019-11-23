import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ListItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            // borderBottom: '1px #ccc dotted',
            textDecoration: this.props.listItem.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {url, jobTitle, deadline, location, title} = this.props.listItem;
        return (
            <div style = {this.getStyle()}>
                <p> 
                    <div className="card mb-3" style={{maxWidth: '100%'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img style={imgStyle} src={url} class="card-img" alt="GCI"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <div>
                                        <p className="card-text text-muted">Looking For <span style={{color: 'red'}}>{jobTitle}</span></p> 
                                        {/* <p style={{color: 'red'}}>{jobTitle}</p> */}
                                    </div>
                                    <br></br>
                                    <div>
                                        <p className="card-text text-muted"><span style={{color: 'black'}}>Application Deadline  </span>{deadline}</p>
                                    </div>
                                    <br></br>
                                    <div>
                                        <p className="card-text text-muted"><span style={{color: 'black'}}>Location  </span>{location}</p>
                                    </div>
                                    <button style={btnStyle}>Apply Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
            </div>
        )
    }
}

// PropTypes
ListItem.propTypes = {
    list: PropTypes.array.isRequired,
}

const imgStyle = {
    height: '100%',
    width: '100%'
}

const btnStyle = {
    backgroundColor: '#42b983',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '5%',
    cursor: 'pointer',
    float: 'right'
}

export default ListItem;
