// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// a. title, which is a String representing the title of the movie

class Movie{
    constructor(title,studio,rating){
 this.title = title;
 this.studio = studio;
 this.rating = rating;
  }
}
const Movie1 = new Movie("title : abc","studio : zerowalt", "rating : 8")
console.log(Movie1.title);
console.log(Movie1.studio);
console.log(Movie1.rating);

// b.studio, which is a String representing the studio that made the movie

class Movie2{
    constructor (title,studio,rating = "rating:PG")
    {
 this.title = title;
 this.studio = studio;
 this.rating = rating;
  }
}
const Movie3= new Movie2("title:123","studio:onefine");
console.log(Movie3.title);
console.log(Movie3.studio);
console.log(Movie3.rating);

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie7{
    constructor (title,studio,rating = "rating:PG")
    {
 this.title = title;
 this.studio = studio;
 this.rating = rating;
  }
}
const Movie8= new Movie2("title:123","studio:onefine");
console.log(Movie8.rating);


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



class Movie5{
    constructor(title,studio,rating){
 this.title = title;
 this.studio = studio;
 this.rating = rating;
  }
}
const Movie6 = new Movie5("title: Casino Royale","studio: Eon Productions","rating: PG13")
console.log(Movie6.title);
console.log(Movie6.studio);
console.log(Movie6.rating);



