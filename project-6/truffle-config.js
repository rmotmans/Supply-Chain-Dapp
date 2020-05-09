const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d98cc942e9194a729c7ce731614f6e62";
 //
 // const fs = require('fs');
 const mnemonic = "mass lyrics fade employ garage hundred artefact draft sort long silly virtual";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
	rinkeby: {
     provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,
      confirmations: 2,
   },
  }
};
