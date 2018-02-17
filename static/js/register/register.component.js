'use strict';

angular.module("register")
    .component("register", {
        templateUrl: "/js/register/register.template.html",
        controller: ["$web3", function RegisterController($web3){
            var self = this;
            console.log("Look NOW at me!")
            console.log($web3)
            console.log("hi?")
            $web3.getContract("Hello").then(function(contract){
                console.log(contract);
            })
        }]
    });