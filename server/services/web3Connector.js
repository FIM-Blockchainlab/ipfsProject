const Web3= require("web3");




var checkAndInstantiateWeb3 = function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)

    if (typeof web3 !== 'undefined') {
      console.log(
        'Using web3 detected from external source. If you find that your accounts don\'t appear or you have 0 MetaCoin, ensure you\'ve configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // Use Mist/MetaMask's provider
      web3 = new Web3(web3.currentProvider);
    } else {
      console.log(
        'No web3 detected. Falling back to http://localhost:7545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      web3 = new Web3(
        new Web3.providers.HttpProvider('HTTP://127.0.0.1:8545')
      );
    }
    return web3
    };




    module.exports = {
      checkAndInstantiateWeb3: checkAndInstantiateWeb3
    };