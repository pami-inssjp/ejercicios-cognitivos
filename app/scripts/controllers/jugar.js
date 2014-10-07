'use strict';

/**
 * @ngdoc function
 * @name hton1App.controller:JugarCtrl
 * @description
 * # JugarCtrl
 * Controller of the hton1App
 */
angular.module('hton1App')
  .controller('JugarCtrl', function ($scope, $rootScope) {

        //-- Este controller renderiza los juegos.

        console.log("Jugar controller: "  + $rootScope.juegoId);

        //-- ejercicio 1
        var ejercicio = {
            idmatrix: 1,
            x:4,
            y:4,
            matrix: []
        };
//        var imagenAleatoria = imageArray[Math.floor(Math.random() * myArray.length)];

        //-- Inicializacion de la matriz
        var matrix = [];

        for(var i=0; i<ejercicio.y; i++) {
            ejercicio.matrix[i] = new Array(ejercicio.x);
        }

        for(var i=0; i < ejercicio.y; i++) {
//            matrix[i] = [];
            for(var j=0; j < ejercicio.x; j++) {
                var celda = {
                    id:''+i + j,
                    imagen: 'images/icon1.png',
                    eventoClick: function(){alert('Esta es la celda ' + id)}
                };
                ejercicio.matrix[i][j] = celda;

            }
        }

        $scope.gridEjercicio = ejercicio;

        $scope.test ="hola";

  });
