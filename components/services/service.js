"use strict";
{
    angular.module('app')
        .service('TestService', function(){
            const service = this; 
            service.testProperty = [];
        });
}