function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.\
  var date = new Date(fecha);

  return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === fecha;
}

module.exports = esFechaValida;