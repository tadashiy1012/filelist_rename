import React from 'react';
import Flist from './Flist.jsx';
import RenameList from './RenameList.jsx';
import RenameBox from './RenameBox.jsx';

const remote = window.require('electron').remote;

export default class FlistBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            rfiles: []
        };
        this.path;
    }
    handleOpenFolder() {
        remote.require('./mapFilelist')((arg, path) => {
            this.path = path;
            const files = arg.map((file) => {
                return {name: file};
            });
            this.setState({files: files, rfiles: files, origin: files});
        });
    }
    handleRenamePreview(newName) {
        const files = this.state.origin.map((file) => {
            return {name: newName + file.name};
        });
        this.setState({rfiles: files});
    }
    handleExecRename() {
        if (window.confirm('Are you sure?')) {
            const pairLs = [];
            for (let i = 0, len = this.state.files.length; i < len; i++) {
                const pair = [this.state.files[i].name, this.state.rfiles[i].name];
                pairLs.push(pair);
            }
            remote.require('./renameFilelist')(this.path, pairLs);
            window.alert('files renamed!');
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleOpenFolder.bind(this)}>open folder</button>
                <br />
                <table><tr>
                    <td><Flist files={this.state.files} /></td>
                    <td>>></td>
                    <td><RenameList files={this.state.rfiles} /></td>
                </tr></table>
                <br />
                <RenameBox 
                    onRenamePreview={this.handleRenamePreview.bind(this)}
                    onExecRename={this.handleExecRename.bind(this)}
                />
            </div>
        );
    }
}