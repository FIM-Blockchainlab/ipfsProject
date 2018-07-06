IPFS = require('ipfs');
fs = require('fs');

const node = new IPFS({ repo: './storage' });
node.on('error', errorObject => console.error(errorObject));
node.on('ready', () => {

var readStream = fs.createReadStream('./ip.js');

const files = [
    {
      content: readStream,
    }
  ]


node.files.add(files, function (err, files) {
    console.log(err);
    console.log(files)
  })


})