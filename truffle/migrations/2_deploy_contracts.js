var Voter = artifacts.require("./Voter.sol");
var CryptocracyElectionCoin = artifacts.require("./CryptocracyElectionCoin.sol");

module.exports = function(deployer) {
	deployer.deploy(Voter);
	deployer.deploy(CryptocracyElectionCoin);
};