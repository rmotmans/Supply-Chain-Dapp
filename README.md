# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Versions of Libraries/Frameworks used

- truffle: v5.1.13
- node: v12.15.0
- web3.js: v1.2.7
- truffle-assertions: v0.9.2
    We used this library to make the process of writing tests easier
- truffle-hdwallet-provider: v1.0.17
    To easily deploy our smart contract on the ethereum test nets through Infura


## UML

### Activity Diagram

![activity](https://raw.githubusercontent.com/rmotmans/Supply-Chain-Dapp/master/images/Activity_Diagram.png)

### Sequence Diagram

![sequence](https://raw.githubusercontent.com/rmotmans/Supply-Chain-Dapp/master/images/Sequence_Diagram.png)

### State Diagram

![state](https://raw.githubusercontent.com/rmotmans/Supply-Chain-Dapp/master/images/State_Diagram.png)

### Class Diagram

![class](https://raw.githubusercontent.com/rmotmans/Supply-Chain-Dapp/master/images/Class_Diagram.png)

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [Solidity](https://solidity.readthedocs.io) - Solidity is the programming language in which the smart contracts are written
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

## Smart Contract

Contract deployed on Rinkeby test network.  
Contract address: 0x78f5E570Fb0fB312efA0c277bEd1f2336c578811 (https://rinkeby.etherscan.io/address/0x78f5e570fb0fb312efa0c277bed1f2336c578811)  

**Transactions**
- Harvested: 0x5eabdf6200db37e382f0ba50b146223d05ce1688f2d541829f63271404c4a14e
- Processed: 0x0cc22bd32c50f66fc9b4d566828ce13a96084a54f17e6c49c2e8eb13e6a5fbfe
- Packed: 0x07fa9a8ad6c1c027cb48766711f8006ad6808dadfb4df29a8ec0ec82ff125287
- ForSale: 0x581083177d4ac540f3b9b8544c4cb2f0202d984439480c6cdfb79d95ddfdbae8
- Sold: 0x869e2c87ee9c7eae0abc7f555f3cc3000be4ccea2defb42b4e55dabf3aa154cd
- Shipped: 0x2935d5d213c71f7232a9a702d9e885ea4711320ad690eff404d5333f2ee32de4
- Received: 0xb76cd4d3d3430e126301de7283ad110865b28bfb9a3d7b36076c8e32244cf563
- Purchased: 0xfc6dd71b5efc37251047d0d9a1d441b205cae6714aa1d2e6bc1103a1f984f3cc

## IPFS

To get a decentralized application on all aspects you could also upload your front-end files (html, css and js) to IPFS.
In this project I did not use IPFS.
