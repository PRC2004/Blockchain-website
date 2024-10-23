require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', //Not to Touch for Now.
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/fpm52gHrh5D5AFxbKQUa25UF7ASKxUtZ', //This is the Url from alchemy.com
      accounts: ['342f9ee17e6685e7ef1d1808ffafe0c6542848445b0eec925c38094ae80302cd'], //This is my MetaMask Private Key
    },
  },
};