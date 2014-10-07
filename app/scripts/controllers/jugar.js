'use strict';

/**
 * @ngdoc function
 * @name hton1App.controller:JugarCtrl
 * @description
 * # JugarCtrl
 * Controller of the hton1App
 */
angular.module('hton1App')
  .controller('JugarCtrl', function ($scope, $rootScope, Randomservice) {

        //-- Este controller renderiza los juegos.

        console.log("Jugar controller: "  + $rootScope.juegoId);

        //-- ejercicio 1
        var ejercicio = {
            idmatrix: 1,
            x:4,
            y:4,
            matrix: []
        };

        var result = Randomservice.method1(4,4, 'esto es un log vacío =P');

        ejercicio.matrix = result.result;

        $scope.gridEjercicio = ejercicio;

        $scope.valido = true;
        $scope.verificar = function(param) {
           console.log("viene " + param);
            $scope.valido = !$scope.valido;
            var x = param.substring(0, 1);
            var y = param.substring(1, 2);

            return ejercicio.matrix[x][y].patron ? 1 : 2;
        };

  });
