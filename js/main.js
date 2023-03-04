// setTimeout(() => {

// }, timeout);

// clearTimeout

// console.log("1");

// const time = setTimeout(function(name){
//     console.log("Hello world!", name);
// }, 3000, "Mirjalol");

// clearTimeout(time);

// console.log(typeof time);
// console.log(time);

// console.log("2");https://www.youtube.com/watch?v=zDlg64fsQow&t=6s&ab_channel=UlbiTV

// setInterval(() => {

// }, interval);

// clearInterval

// let count = 10;

// const intervalID = setInterval(function(){
//     console.log("Hello!", count--);
// setTimeout(() => {

// }, timeout);

// clearTimeout

// console.log("1");

// const time = setTimeout(function(name){
//     console.log("Hello world!", name);
// }, 3000, "Mirjalol");

// clearTimeout(time);

// console.log(typeof time);
// console.log(time);

// console.log("2");https://www.youtube.com/watch?v=zDlg64fsQow&t=6s&ab_channel=UlbiTV

// setInterval(() => {

// }, interval);

// clearInterval

// let count = 10;

//     if(count == 0){
//         clearInterval(intervalID);
//     }
// }, 1000);

//? setinterval orqali inputdan kiritilgan sonni teskari sanab console ga chiqarib oxiri 0 da to'xtatish

//? 3 sekunddan keyin body rangi blue rangga o'tib qolishi kerak

//? body ranglari har 2 sekundda almashib turishi kerak diskoteka

//? DOM 11:05:60

// search movies functions

// GET ELEMENTS FROM DOM
const elSearchForm = document.querySelector(".js-search-form");
const elSearchInput = elSearchForm.querySelector(".js-search-input");
const elMoviesList = document.querySelector(".js-movies-list");
const elMovieTemplate = document.querySelector(".js-movie-template").content;
const newMoviesFragment = document.createDocumentFragment();

// API PATH --> URL
const API_PATH = "http://www.omdbapi.com/?apikey=791fd94c&s=";

// RENDER MOVIES TO DOM
function renderMovies(movies) {
  movies.forEach((movie) => {
    const movieEl = elMovieTemplate.cloneNode(true);
    movieEl.querySelector(".js-movie-img").src = movie.Poster;
    movieEl.querySelector(".js-movie-img").alt = movie.Title;
    movieEl.querySelector(".js-movie-title").textContent = movie.Title;
    movieEl.querySelector(".js-movie-type").textContent = movie.Type;
    movieEl.querySelector(".js-movie-year").textContent = movie.Year;

    newMoviesFragment.appendChild(movieEl);
  });
  elMoviesList.appendChild(newMoviesFragment);
}

// SEARCH MOVIES FUNCTION
function getMovies(inputValue) {
  fetch(API_PATH + inputValue)
    .then((response) => response.json())
    .then((data) => {
      renderMovies(data.Search);
    })
    .catch((error) => console.log(error.message));
}

// EVENT HANDLER FUNCTION
elSearchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  getMovies(elSearchInput.value);
});