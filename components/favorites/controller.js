{
    angular.module('app')
        .controller('FavoritesController', function(AddService){
            const $ctrl = this;
            $ctrl.add = AddService.add

            $ctrl.removeMovie = function(index) {
                $ctrl.add.splice(index,1);
            }
            
        }
    )};