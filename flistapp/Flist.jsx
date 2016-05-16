import React from 'react';
import FlistItem from './FlistItem.jsx';

export default class Flist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const childNode = this.props.files.map((file) => {
            console.log(file);
            return (
                <FlistItem>{file.name}</FlistItem>
            );
        });
        return (
            <select size="10">
                {childNode}
            </select>
        );
    }
}