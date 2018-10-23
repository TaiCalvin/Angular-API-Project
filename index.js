"use strict";
{
    angular.module('app',['ngRoute'])
        .config( function($routeProvider){
            $routeProvider
                .when('/',{
                    template: '<search></search>'
                })
                .when('/list',{
                    template: '<list></list>'
                })
                .when('/favorites',{
                    template: '<favorites></favorites>'
                })
                .otherwise({
                    template: '<h1>404 PAGE DOES NOT EXIST</h1>'
                })
        });
}