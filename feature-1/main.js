var key = "71e9a5e20d69c0d631300705fc66962f6155ff6f5007ec4d356ba293afc3c3d1"
var quoteContainer = document.querySelector(".quote-container > p");

$.ajax({
  type: "GET",
  url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,ETH,LTC&api_key=" + key,
  success: data => console.log(data)
})

$.ajax({
  type: "GET",
  url: "https://quote-garden.herokuapp.com/api/v2/quotes/random",
  success: data => {
    var quoteData = data.quote.quoteText
    quoteContainer.textContent = quoteData
    console.log(data)
    console.log(quoteData)}
})
