import React from 'react';

export default class Flistitem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <option>
                {this.props.children}
            </option>
        );
    }
}