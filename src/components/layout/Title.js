import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <section>
                <div class="container-fluid" style={titleStyle}>
                    <h1 style={h1Style}>Opportunity Calendar</h1>
                    <h4 style={h4Style}>Know right opportunities at right time!</h4>
                </div>
            </section>
        )
    }
}

const titleStyle = {
    color: '#fff', 
    background: '#42b983'
}

const h1Style = {
    padding: '2% 0% 0% 6%',
    fontFamily: 'Georgia'
}

const h4Style = {
    padding: '0% 0% 5% 6%',
    fontFamily: 'Garamond'
}

export default Title;
