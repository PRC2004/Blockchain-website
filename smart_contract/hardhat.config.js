require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', //Not to Touch for Now.
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/fpm52gHrh5D5AFxbKQUa25UF7ASKxUtZ', //This Done.
      accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
    },
  },
};