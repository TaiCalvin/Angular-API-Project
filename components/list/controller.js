"use strict";
{
    angular.module('app')
        .controller('ListController', function(TestService, AddService){
            const $ctrl = this;
            $ctrl.movieTitle = TestService.movies

            
            $ctrl.addMovie = function($index) {
                AddService.add.push($ctrl.movieTitle[$index]);
                
            }

           

        });

}