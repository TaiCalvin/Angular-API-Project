"use strict";

{
    angular.module('app')
        .controller('SearchController', function($http, TestService){
            const $ctrl = this;
            
            // $ctrl.num = [];
            $ctrl.movieTitle = [];
            $ctrl.movieRating = ['G', 'PG','E','R'];
            $ctrl.movieYear = ['2000','2001','2002','2018'];
            $ctrl.submit = function(){
                // window.location = "#!/list";
                console.log($ctrl.genre)
                moviesTitle();
            }
            function moviesTitle(){

           
                  return $http({
                    
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/discover/movie?api_key=7291b872bf9d599b2e1cbe4448b45c85&language=en-US
                    &sort_by=popularity.desc&certification_country=US&certification=${$ctrl.rating}&include_adult=false&include_video=false&page=1&with_genres=${$ctrl.genre}&year=${$ctrl.year}`,
                  }).then((response) => { 

                    for (let i = 0; i < response.data.results.length; i++) {
                        // $ctrl.num.push(response.data.results[i].genre_ids)
                        // $ctrl.movieTitle.push(response.data.results[i].overview)
                        // $ctrl.movieTitle.push(response.data.results[i].title);
                    }      
                    TestService.movies = response.data.results;
                
                    console.log(response.data);
                  }, (error) => {
                    console.log(error);
                    
                });
                
             

            };

            
            // moviesTitle();

            $ctrl.movieGenre = [];
            
            function movieGenre() {

                return $http({ 
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=7291b872bf9d599b2e1cbe4448b45c85&language=en-US',
                }).then((response) => { 

                    for (let i = 0; i < response.data.genres.length; i++) {
                        // $ctrl.num.push(response.data.results[i].genre_ids)
                        $ctrl.movieGenre.push(response.data.genres[i]);
                    }      
                    // TestService.movies = $ctrl.movieTitle;
                
                    console.log(response.data);
                  }, (error) => {
                    console.log(error);
                    
                });
                
             

            };
            
            movieGenre();

            var slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} ;
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 7000); // Change image every 7 seconds
    
}
        });

    
}


 