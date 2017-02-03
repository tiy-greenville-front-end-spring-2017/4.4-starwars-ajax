var $ = window.$ = window.jQuery = require('jquery');
var Handlebars = require('handlebars');
var _ = require('underscore');
require('bootstrap-sass');

$.ajax('https://swapi.co/api/planets/').done(function(data){
  console.log(data);
  var planetList = data.results;
  displayPlanetList(planetList);
});

function displayPlanetList(planetList){
  var source = $('#planet-template').html();
  var template = Handlebars.compile(source);

  _.each(planetList, function(planet){
    $('#planet-list').append(template(planet));
  });

}
