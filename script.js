'use strict';


const nubmerOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = {
    count: nubmerOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt("Один из последних просмотреных фильмов?", ''),
      b = prompt("На сколько оцените его?", ''),
      c = prompt("Один из последних просмотреных фильмов?", ''),
      d = prompt("На сколько оцените его?", '');


    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);