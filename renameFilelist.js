const fs = require('fs');
const path = require('path');

module.exports = function renameFilelist(dirPath, filePairs) {
    console.log(dirPath);
    console.log(filePairs);
    for (let i = 0; i < filePairs.length; i++) {
        const oldName = filePairs[i][0];
        const newName = filePairs[i][1];
        fs.renameSync(path.join(dirPath, oldName), path.join(dirPath, newName));
    }
};