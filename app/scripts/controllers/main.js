'use strict';

/**
 * @ngdoc function
 * @name hton1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hton1App
 */
angular.module('hton1App')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {

    $scope.templateUrl = 'views/partials/indexJuego.html';

    var juegos = [{id:1, juego:"juego 1", jugador:"pepito", puntajeMax:1000 }];

    $scope.juegos = juegos;

    $scope.jugar = function(idJuego){
        console.log("Jugar " + idJuego);
        $rootScope.juegoId = idJuego;
        $location.path('/jugar');

    };
  });
