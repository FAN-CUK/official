import React from 'react';
import { BoardList } from 'components'

class Board extends React.Component {
    render() {
        return(
            <div>
                <p>board</p>
                <BoardList name="syeoni"/>
                <BoardList name="yong" maleFlag={true}/>
                <BoardList name="soyeon" maleFlag={false}/>
                <BoardList name="seonsik" maleFlag={true}/>
            </div>
        );
    }
}

export default Board;
