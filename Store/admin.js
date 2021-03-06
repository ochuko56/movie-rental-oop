var adminsDB = require("../database").admins;
var Movie = require("./movie");
var Rental = require("./rental");

function Admin(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = adminsDB.length > 0 ? adminsDB[adminsDB.length - 1].id + 1 : 1;
}

//Add movie to database
Admin.prototype.addMovie = function(title, genre, year) {
  Movie.createMovie(title, genre, year);
};

Admin.prototype.getMoviefromDB = function(title) {
  var movie = Movie.getMovie(title);
  return movie === false ? "Movie not found" : movie;
};

Admin.prototype.readAllMovies = function() {
  var collection = Movie.getAllMovies();

  if (collection) {
    return collection;
  }
  return "Err";
};

// Edit multiple movie properties
Admin.prototype.editMultipleProps = function(title, updateObj) {
  return Movie.editMultipleProps(title, updateObj);
};

// Edit one property
Admin.prototype.editMovie = function(title, prop, newValue) {
  return Movie.editMovie(title, prop, newValue);
};

Admin.prototype.deleteMovie = function(title, year) {
  return Movie.deleteMovie(title, year);
};

Admin.prototype.getRental = function(id) {
  var rental = Rental.readOne(id);
  return rental === false ? "Rental does not exist" : rental;
};

// Get all rentals by a customer
Admin.prototype.getRentalByCustomer = function(customer_id) {
  var rental = Rental.readByCustomer(customer_id);
  return rental.length > 0 ? rental : "No rentals by this customer";
};

Admin.prototype.viewRentalsInDB = function() {
  var rentals = Rental.viewRentals();
  return rentals.length === 0 ? "rentalDB is empty" : rentals;
};

Admin.prototype.editRental = function(id, prop, newValue) {
  return Rental.editRentals(id, prop, newValue);
};

module.exports = Admin;
