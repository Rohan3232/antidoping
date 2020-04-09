const AntiDoping = artifacts.require("./AntiDoping.sol");

module.exports = function(deployer) {
  deployer.deploy(AntiDoping);
};
