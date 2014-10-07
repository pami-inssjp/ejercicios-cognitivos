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
        this.method1 = function(cols,rows) {

            var patrones = ['cacerola','bananas','tuerca','muffin','stop','pera','regla'];

            var m = 6;
            var rand = function() {
                return Math.floor(Math.random()*m);
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
