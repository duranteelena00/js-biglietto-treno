/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

//Define ticket price per km
var pricePerKm = 0.21;
console.log("Price per km:", pricePerKm.toString());

//Ask user how many km he has to travel
var kmToTravel = parseInt(prompt("Inserisci il numero di km devi percorrere"));
console.log("Km to travel:", kmToTravel.toString());

//Ask user his age
var userAge = parseFloat(prompt("Inserisci la tua età", "18"));
console.log("User age:", userAge.toString());

//Define full price ticket
var fullPriceTicket = (kmToTravel * pricePerKm).toFixed(2);

//Define reduced tickets
var underageTicket = (fullPriceTicket - (fullPriceTicket / 100 * 20)).toFixed(2);

var over65Ticket = (fullPriceTicket - (fullPriceTicket / 100 * 40)).toFixed(2);

//Create the variable to contaain user's ticket price
var userTicketPrice;

//Validation
if (isNaN(kmToTravel) || kmToTravel <= 0 || isNaN(userAge) || kmToTravel < 0) {
  alert("Ricarica la pagina e inserisci dei dati validi");
}

//Define user's ticket (underage / over65 / fullprice)
else {
  if (userAge < 18) {
    userTicketPrice = underageTicket;
  } else if (userAge > 65) {
    userTicketPrice = over65Ticket;
  } else {
    userTicketPrice = fullPriceTicket;
  }
}
console.log("User's ticket price: €", userTicketPrice.toString());

//Get the html element to print in the ticket price
var ticketPricePlaceholder = document.getElementById("ticket-price");

//Print the ticket price
ticketPricePlaceholder.innerHTML =
  "Il costo del tuo biglietto è di €" + userTicketPrice;

