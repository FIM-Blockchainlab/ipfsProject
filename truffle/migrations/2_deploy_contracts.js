var ipfsContract = artifacts.require("./ipfsContract.sol");

module.exports = function(deployer) {
  deployer.deploy(ipfsContract);
};
