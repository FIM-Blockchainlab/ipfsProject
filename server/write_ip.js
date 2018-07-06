IPFS = require('ipfs');
fs = require('fs');
path = require('path');
mfs = require('ipfs-mfs')

const node = new IPFS({ repo: './storage' });
node.on('error', errorObject => console.error(errorObject));
node.on('ready', () => {

var writeStream = fs.createWriteStream(__dirname + '/test')

var CID = 'QmNzAUCvCKGtVGytfRvKwnN3PBuAkp4sEMa5PA81iEVP3M'

const stream = node.files.getReadableStream(CID)

stream.on('data', (file) => {
  console.log('1')
  // write the file's path and contents to standard out
  if(file.type !== 'dir') {
    file.content.on('data', (data) => {
      console.log(data);
      ensureDirectoryExistence(__dirname+'/'+file.path)
      fs.createWriteStream(__dirname+'/'+file.path).write(data)
     // fs.writeFileSync(__dirname+'/'+file.path, data)
    })
    file.content.resume()
  } 
})

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}


})
