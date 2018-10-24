"use strict";
{
    angular.module('app')
        .controller('ListController', function(TestService){
            const $ctrl = this;
            $ctrl.movieTitle = TestService.movies

        });

}