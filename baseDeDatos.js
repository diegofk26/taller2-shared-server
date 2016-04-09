var Massive = require("massive");

//Tablas de la base de datos:
//intereses
//usuarios

//connect to the database. This will load the tables and functions, returning them to the db instance
var db = Massive.connectSync({db : "db"});

//query a table
exports.guardarInteres = function(cat,val){


  var nuevoInteres = {
    category : cat,
    value : val,
  };

  console.log(nuevoInteres);

  var saved = db.intereses.saveSync(nuevoInteres);
  console.log(saved);

}

//run the login function
