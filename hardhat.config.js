require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  solidity: "0.5.11",
  // solidity: "0.8.12",
};
