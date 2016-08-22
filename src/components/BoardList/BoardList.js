import React from 'react';
import css from './BoardList.css';

class BoardList extends React.Component {
    render() {
        const blue = {
            color : 'blue'
        };
        const male = (
            <p> is a male</p>
        );

        return(
            <div>
                <p style={blue}>{this.props.name}</p>
                {this.props.maleFlag ? male : ''}
            </div>
        );
    }
}

export default BoardList;