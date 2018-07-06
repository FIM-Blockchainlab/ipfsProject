const contract = require('truffle-contract');
const simpleContract = require('../truffle/build/contracts/ipfsContract.json');
const web3Connector = require('./web3Connector')

var web3 = web3Connector.checkAndInstantiateWeb3()
console.log('web3Set')

let contractInst = contract(simpleContract);
contractInst.setProvider(web3.currentProvider);

function writeData(data) {

        return contractInst.deployed().then(instance => {
            return instance.set(data.hash, data.name, data.description, { from: web3.eth.accounts[0], gas: 300000 });
        })
}


function getFileList() {
        return contractInst.deployed().then(instance => {
            return instance.get({ from: web3.eth.accounts[0], gas: 300000 });
        })
}

function getFileHash(_id) {
    return contractInst.deployed().then(instance => {
        return instance.getHashName(_id, { from: web3.eth.accounts[0], gas: 300000 });
    })
}

function deleteElement(_id) {
    return contractInst.deployed().then(instance => {
        return instance.deleteElement(_id, { from: web3.eth.accounts[0], gas: 300000 });
    })
}

var getContract = function() {
    return new Promise((resolve, reject) => {
      resolve(
        fs.readFileSync(
          __dirname + "/../truffle/build/contracts/ipfsContract.json"
        )
      );
    });
  };

module.exports = {
    writeData: writeData,
    getFileList: getFileList,
    getFileHash: getFileHash,
    getContract: getContract,
    deleteElement: deleteElement,
};