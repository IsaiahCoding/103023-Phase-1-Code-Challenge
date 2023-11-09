const movieTitleAPI = "http://localhost:3000/films/"


//poster
const moviePoster = cinema("poster")
//title
const movieTitle = cinema("title")
//runtime
const movieLength = cinema("runtime")
//showetime
const movieTime = cinema("showtime")
//available tickets (tickets_sold - capacity)
const availTickets = cinema("ticket-num")





fetch(`${movieTitleAPI}/1`)
  .then(res => res.json())
  .then(renderMovieTitle);


fetch(movieTitleAPI)
.then(res => res.json())
.then(renderMovieTitle)


function renderMovieTitle(movie){
    //console.log(movie)
    moviePoster.src = movie.image_url;
    movieTitle.textContent = movie.title;
    movieLength.textContent = movie.runtime
    movieTime.textContext = movie.showtime


}

function cinema(id){
    return document.getElementById(id)
}
