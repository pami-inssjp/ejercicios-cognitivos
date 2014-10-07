'use strict';

/**
 * @ngdoc service
 * @name hton1App.Randomservice
 * @description
 * # Randomservice
 * Service in the hton1App.
 */
angular.module('hton1App')
  .service('Randomservice',  function() {
        this.method1 = function(rows,cols) {

            var patrones = ['cacerola','bananas','tuerca','muffin','stop','pera'];

            var m = 5,
            // a - 1 should be divisible by m's prime factors
            a = 11,
            // c and m should be co-prime
            c = 17;
            // Setting the seed
            var z = 3;
            var rand = function() {
            // define the recurrence relationship
                z = (a * z + c) % m;
                // return an integer
                // Could return a float in (0, 1) by dividing by m
                return z;
            };

            for(i = 0; i < 6; i++) {
                console.log(patrones[rand()]);
            }

            var patron=patrones[rand()];

            //-- Inicializacion de la matriz
            var result = [];

            for(var i=0; i<rows; i++) {
                result[i] = new Array(cols);
            }

            for(var i=0; i < rows; i++) {
                for(var j=0; j < cols; j++) {
                    var imagenCelda=patrones[rand()];
                    var celda = {
                        id:''+i + j,
                        imagen: 'images/'+imagenCelda+'.png',
                        patronActivo: (imagenCelda===patron)?true:false
                    };
                    result[i][j] = celda;
                }
            }


            return  {matriz:result,patron:patron};
        }

        this.method2 = function() {
            //..
        }
    });
