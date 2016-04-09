
const parametrosObligatorios = ['category','value'];
const interest = 'interest';
const contentType = 'application/json';

var manejadorDeBasesDeDatos = require('./baseDeDatos.js');



exports.losParametrosDelAltaSonValidos = function(r){

  if( r == null || r.body == '' || r.body == null){
    return false;
  }

  if(r.headers['content-type'] != contentType){
    return false;
  }
  for (var i = 0; i < parametrosObligatorios.length; i++) {

    if(r.body[interest][parametrosObligatorios[i]] == null){
      return false;
    }
  }
  return true;
};





exports.darDeAltaInteres = function(r){
  // TODO: dar de alta a los intereses
  //
  // var category = r.body[interest][parametrosObligatorios[0]];
  // var value =  r.body[interest][parametrosObligatorios[1]];
  //
  // var resultado = manejadorDeBasesDeDatos.guardarInteres(category,value);
  //
  // return resultado;
}
