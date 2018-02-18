'use strict';

angular.module("web3")
    .service("$web3", ["$resource", "$q", function($resource, $q){
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

        api.getAccounts = function(){
            var defer = $q.defer();

            web3.eth.getAccounts(function(error, accounts){
                if(error != null){
                    defer.reject(error);
                } else {
                    defer.resolve(accounts);
                }
            });

            return defer.promise;
        }

        api.getContract = function(contractName){
            var defer = $q.defer();

            $resource("/contracts/" + contractName + ".json").get({}).$promise.then(
                function(definition){
                    if(definition != null && definition.abi != null){
                        defer.resolve(web3.eth.contract(definition.abi));
                    } else {
                        defer.reject("Contract not found");
                    }
                },
                function(err){
                    defer.reject(err);
                })

            return defer.promise;
        };


        init();

        return api;
    }]);
