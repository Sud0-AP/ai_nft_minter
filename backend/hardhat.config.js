require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,  // Default optimizer settings for better gas efficiency
      }
    }
  },
  allowUnlimitedContractSize: true,
  networks: {
    amoy: {
      url: `https://rpc-amoy.polygon.technology/`,
      chainId: 80002,
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // Make sure PRIVATE_KEY is correctly formatted
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`
  },
  paths: {
    artifacts: '../frontend/artifacts'
  }
};
