'use strict';

angular.module("web3")
    .service("$web3", ["$resource", function($resource){
        var api = {};
        var URI = "http://localhost";
        var PORT = "9545";

        function init(){
            if (typeof web3 !== 'undefined') {
                web3 = new Web3(web3.currentProvider);
            } else {
                // set the provider you want from Web3.providers
                web3 = new Web3(new Web3.providers.HttpProvider(URI + ":" + PORT));
            }
        }

        api.getContract = function(contractName){
            return $resource("/contracts/" + contractName + ".json").get({}).$promise;
        }

        return api;
    }]);
