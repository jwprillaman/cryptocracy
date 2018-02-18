'use strict';

angular.module("register")
    .service("$register", ["$web3", function($web3){
        var api = {};

        api.put = function(alias){
            $web3.getAccounts().then(function(accounts){
                if(accounts.length > 0){
                    $web3.getContract("Voter").then(function(contract){
                        console.log(contract);

                        var contractInstance = contract.at(accounts[0]).register(alias, function(err, result){
                            console.log(result);
                        });

                    })
                } else {
                    console.log("no valid account")
                }
            })
        }

        return api;
    }]);