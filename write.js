ipfsService = require('./services/ipfsService')
contractService = require('./services/contractService')

var express = require('express')
var multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() });
var app = express();


// opens IPFS node
ipfsService.node.on('ready', () => {

  // opens express listener
  app.listen(3000, function () {
    console.log('App listening on port 3000!');
  });

  // sets http post listen
  app.post("/data", upload.single("file"), (req, res) => {
    ipfsService.uploadFile(req.file).then(result => {
      //console.log(result)
      console.log(req)
      let data = {
        hash: result[0].hash,
        name: req.body.name,
        description: req.body.desc,
      }
      console.log(data)
      contractService.writeData(data).then(resolve => { res.send(resolve) }, err => { res.send(err) })
    })
  });

})