const fs = require('fs');
const path = require('path');
const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;

module.exports = function mapFilelist(callback) {
    let focusedWindow = browserWindow.getFocusedWindow();
    dialog.showOpenDialog(focusedWindow, {
        properties: ['openDirectory']
    }, (args) => {
        console.log(args);
        const files = fs.readdirSync(args[0]).filter((arg) => {
            const filePath = path.join(args[0], arg);
            return !fs.statSync(filePath).isDirectory();
        });
        console.log(files);
        callback(files, args[0]);
    });
}