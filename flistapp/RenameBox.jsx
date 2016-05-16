import * as React from 'react';

export default class RenameBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdatePreview = this.handleUpdatePreview.bind(this);
        this.handleExecRename = this.handleExecRename.bind(this);
    }
    handleUpdatePreview(e) {
        e.preventDefault();
        console.log(e.target.value);
        this.props.onRenamePreview(e.target.value);
    }
    handleExecRename(e) {
        e.preventDefault();
        this.props.onExecRename();
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleUpdatePreview} />
                <br />
                <button onClick={this.handleExecRename}>exec rename</button>
            </div>
        );
    }
}