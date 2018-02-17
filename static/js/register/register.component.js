'use strict';

angular.module("register")
    .component("register", {
        templateUrl: "/js/register/register.template.html",
        controller: [function RegisterController(){
            var self = this;
            console.log("Look at me!")
        }]
    });