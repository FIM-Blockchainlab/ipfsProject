ipfsService = require('./services/ipfsService')
contractService = require('./services/contractService')

var express = require('express')
var app = express();


// opens IPFS node
ipfsService.node.on('ready', () => {

  // opens express listener
  app.listen(3001, function () {
    console.log('App listening on port 3001!');
  });

  // sets http post listen
  app.get("/filelist",  (req, res) => {
    contractService.getFileList().then(result => {res.send(result)})
  });

  app.get("/file",  (req, res) => {
    ipfsService.downloadFile(req.query.hash).then(result => {
      console.log(req.query)
      res.set('Content-disposition', 'attachment; filename=' + req.query.hash);
      res.send(result)
    })
  });
  
})