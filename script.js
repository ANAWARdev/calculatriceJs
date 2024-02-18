// Déclaration des variables
const screen = document.getElementById("screen");
let expression = "";
// fonction d'affichage sur l'écran 
// value: La valeur associée au bouton cliqué (chiffre, opérateur, etc.).
// expression: La variable qui stocke l'expression en cours.
// screen.textContent: C'est la propriété du texte de l'élément avec 
// l'id "screen" qui est mise à jour pour afficher l'expression mise à jour.
function appendToScreen(value) {
  expression += value;
  screen.textContent = expression;
}
// la fonction effacer
function clearScreen() {
  expression = "";
  screen.textContent = "";
}
// le calcul
function calculateResult() {
  try {
    const result = eval(expression);
    screen.textContent = result;
    expression = result.toString();
  } catch (error) {
    screen.textContent = "Erreur";
    expression = "";
  }
}