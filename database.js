var admins = [];
var customers = [];
var movies = [
  { id: 1, title: "Fear", genre: "Thriller", year: 1997 },
  { id: 2, title: "Star Trek", genre: "Sci-Fi", year: 2005 },
  { id: 3, title: "Moonlight", genre: "Drama", year: 2016 },
  { id: 4, title: "The Accountant", genre: "Action", year: 2016 },
  { id: 5, title: "Mad Max", genre: "Adventure", year: 2015 },
  { id: 6, title: "Spotlight", genre: "Drama", year: 2015 },
  { id: 7, title: "I,Robot", genre: "Sci-Fi", year: 2008 },
  { id: 8, title: "Salt", genre: "Action", year: 2010 },
  { id: 9, title: "Disclosure", genre: "Drama", year: 1994 },
  { id: 10, title: "Red Sparrow", genre: "Drama", year: 2018 }
];
var rentals = [
  {
    id: 1,
    customer_id: 3,
    movies: [
      { id: 9, title: "Disclosure", genre: "Drama", year: 1994 },
      { id: 7, title: "I,Robot", genre: "Sci-Fi", year: 2008 },
      { id: 6, title: "Spotlight", genre: "Drama", year: 2015 }
    ],
    status: "closed",
    rentDate: "Mon Apr 15 2019",
    dueDate: "Sat Apr 20 2019"
  },
  {
    id: 2,
    customer_id: 3,
    movies: [
      ,
      { id: 8, title: "Salt", genre: "Action", year: 2010 },
      { id: 3, title: "Moonlight", genre: "Drama", year: 2016 }
    ],
    status: "open",
    rentDate: "Sun Apr 21 2019",
    dueDate: "Fri Apr 26 2019"
  }
];

module.exports = {
  admins,
  customers,
  movies,
  rentals
};
