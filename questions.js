var CreationTableauLangages = function () {
  var myArray = ['Html', 'CSS', 'Java', 'PHP'];
  return myArray;
}

var CreationTableauNombres = function () {
  var myArrayNumber = [0, 1, 2, 3, 4, 5];
  return myArrayNumber;
}

var RemplacementElement = function (langages) {
  var myArray = ['Html', 'CSS', 'Java', 'PHP'];
  myArray[2] = 'Javascript'
  return myArray;
}

var AjoutElementLangages = function (langages) {
  var myArray = ['Html', 'CSS', 'Javascript', 'PHP'];
  myArray[4] = 'Ruby'
  myArray[5] = 'Python'
  return myArray;
}

var AjoutElementNombres = function (nombres) {
  var myArrayNumber = [0, 1, 2, 3, 4, 5];
  myArrayNumber.unshift(-2,-1)
  return myArrayNumber;
}

var SuppressionPremierElement = function (langages) {
  var myArray = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  myArray.shift();
  return myArray;
}

var SuppressionDernierElement = function (langages) {
  var myArray = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
  myArray.shift();
  myArray.pop();
  return myArray;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux_sociaux_chaineString = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
      reseaux_sociauxArray = reseaux_sociaux_chaineString.split(',');
  return reseaux_sociauxArray;
}

var ConversionTableauChaine = function (langages) {
  var myArray = ['CSS', 'Javascript', 'PHP', 'Ruby'];
  langagesString = myArray.join(',');
  return langagesString;
}

var TriTableau = function (reseaux_sociaux) {
  var reseaux_sociauxArray = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
  reseaux_sociauxArray = reseaux_sociauxArray.sort();
  return reseaux_sociauxArray;
}

var InversionTableau = function (reseaux_sociaux){
  var myArray = ['CSS', 'Javascript', 'PHP', 'Ruby'];
  myArray = myArray.reverse();
  return myArray;
}
