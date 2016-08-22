import React from 'react';

class MenuItem extends React.Component {
    render() {
        return(
            <li><a href={"/board/" + this.props.idx}>{this.props.name}</a></li>
        )
    }
};

export default MenuItem;
