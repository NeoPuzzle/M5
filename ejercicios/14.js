function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var str1Lenght = str1.length
  var str2Lenght = str2.length

  return str1Lenght === str2Lenght
}

module.exports = tienenMismaLongitud;