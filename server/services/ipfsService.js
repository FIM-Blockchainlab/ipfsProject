IPFS = require('ipfs');


// defines IPFS storage path
const node = new IPFS({ repo: '../storage' });
node.on('error', errorObject => console.error(errorObject));

// node.on('ready', () => {    })

// opens IPFS node
function uploadFile(file) {
    return new Promise((res, rej) => {
        node.files.add(file, function (err, files) {
            if (!err) {
                res(files)
            }
            rej(err);
        })
    })
}



function downloadFile(hash) {
    return new Promise((res, rej) => {
        node.files.get(hash, function (err, files) {
            if (!err) {
                res(files)
            }
            rej(err);
        })
    })
}


module.exports = {
    node: node,
    uploadFile: uploadFile,
    downloadFile: downloadFile,
};





