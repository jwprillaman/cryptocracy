'use strict';

angular.module("register")
    .component("register", {
        templateUrl: "/js/register/register.template.html",
        controller: ["$web3", "$register", function RegisterController($web3, $register){
            var self = this;
            $web3.getContract("Hello").then(function(contract){
                console.log(contract);
            })
            this.alias = "";
            this.submit = function(){
                console.log(this.alias);
                $register.put(this.alias);
            }
        }]
    });