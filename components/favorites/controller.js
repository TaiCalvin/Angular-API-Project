{
    angular.module('app')
        .controller('FavoritesController', function(AddService){
            const $ctrl = this;
            $ctrl.add = AddService.add
            
        }
    )};