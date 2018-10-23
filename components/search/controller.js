// "use strict";

// {
//     angular.module('app')
//         .controller('SearchController', function($http){
//             const $ctrl = this;
            
//             $ctrl.movieTitle = [];
//             function movieGenre(){

           
//                   return $http({
                    
//                     method: 'GET',
//                     url: 'https://api.themoviedb.org/3/discover/movie?api_key=7291b872bf9d599b2e1cbe4448b45c85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
//                   }).then((response) => { 

//                     for (let i = 0; i < response.data.results.length; i++) {
//                         $ctrl.movieTitle.push(response.data.results[i].title);
//                     }      
        
    
//                     console.log(response.data);
//                   }, (error) => {
//                     console.log(error);
                    
//                 });
                
             

//             };

            
//             movieGenre();
            
//         });
       
// }
"use strict";

{
    angular.module('app')
        .controller('SearchController', function($http, TestService){
            const $ctrl = this;
            
            // $ctrl.num = [];
            $ctrl.movieTitle = [];
            function moviesTitle(){

           
                  return $http({
                    
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/discover/movie?api_key=7291b872bf9d599b2e1cbe4448b45c85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
                  }).then((response) => { 

                    for (let i = 0; i < response.data.results.length; i++) {
                        // $ctrl.num.push(response.data.results[i].genre_ids)
                        $ctrl.movieTitle.push(response.data.results[i].title);
                    }      
                    TestService.movies = $ctrl.movieTitle
                
                    console.log(response.data);
                  }, (error) => {
                    console.log(error);
                    
                });
                
             

            };

            
            moviesTitle();
                     });
       
 }