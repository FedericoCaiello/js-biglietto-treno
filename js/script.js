// numero di chilometri da percorrere
var chilometriUtente = prompt("numero di chilometri da percorrere?");
console.log(chilometriUtente);
var etaPasseggero = prompt("quale' la tua eta'?");
console.log(etaPasseggero);
// prezzo totale del biglietto
var costoBiglietto = chilometriUtente * 0.21; // moltiplicazione, con il segno*
console.log(costoBiglietto);
// condizioni sconto Biglietto
if (etaPasseggero < 18){
  // minorenne sconto del 20%
console.log(costoBiglietto - (costoBiglietto * 20) / 100);
} else if (etaPasseggero > 65) {
  // over 65 anni di eta' sconto 40%
  console.log(costoBiglietto - (costoBiglietto * 40) / 100);
}
