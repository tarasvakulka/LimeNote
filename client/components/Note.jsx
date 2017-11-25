import React from 'react';

import './Note.scss'

class Note extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Note'>
                <span className='Note__del-icon' onClick={this.props.onDelete}> x </span>
                {
                    this.props.title
                    ?
                        <h4 className="Note__title">{this.props.title}</h4>
                    :
                        null
                }
                <div className='Note__text'>{this.props.children}</div>
            </div>
        );
    }
}

export default Note;