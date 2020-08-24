var key = "71e9a5e20d69c0d631300705fc66962f6155ff6f5007ec4d356ba293afc3c3d1"
var quoteContainer = document.querySelector(".quote-container > p");
var usdollarData = document.querySelector(".usdollar-data");
var bitcoinData = document.querySelector(".bitcoin-data");
var ethereumData = document.querySelector(".ethereum-data");
var litecoinData = document.querySelector(".litecoin-data");
var inputData = document.querySelector(".input-dollar-amount");
var dollarButton = document.querySelector(".us-button")
var bitcoinInfo;
var ethereumInfo;
var litecoinInfo;

$.ajax({
  type: "GET",
  url: "https://min-api.cryptocompare.com/data/pricemulti?fsyms=USD&tsyms=BTC,ETH,LTC,USD&api_key=" + key,
  success: data => {
    bitcoinInfo = data.USD.BTC
    ethereumInfo = data.USD.ETH
    litecoinInfo = data.USD.LTC
    bitcoinData.textContent = bitcoinInfo.toFixed(9)
    ethereumData.textContent = ethereumInfo.toFixed(5)
    litecoinData.textContent = litecoinInfo.toFixed(5)
    // console.log(bitcoinInfo)
    // console.log(ethereumInfo)
    // console.log(litecoinInfo)
    // console.log(data)
  }
})

$.ajax({
  type: "GET",
  url: "https://quote-garden.herokuapp.com/api/v2/quotes/random",
  success: data => {
    var quoteData = data.quote.quoteText
    quoteContainer.textContent = quoteData
    // console.log(data)
    // console.log(quoteData)
  }
})

inputData.addEventListener("input", dollarConverter)


function dollarConverter(event) {
  var dollarAmount = event.target.value;
  if (!event.target.value) {
    (dollarAmount = 1)
  }

  console.log(event.target.value)
  var newBitcoin = dollarAmount * bitcoinInfo
  var newEthereum = dollarAmount * ethereumInfo
  var newLitecoin = dollarAmount * litecoinInfo

  bitcoinData.textContent = newBitcoin.toFixed(5);
  ethereumData.textContent = newEthereum.toFixed(5);
  litecoinData.textContent = newLitecoin.toFixed(5);
}

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ['Jan', 'March', 'May','July', 'Aug'],
    datasets: [{
      label: 'CryptoCurrency Rates',
      backgroundColor: 'rgb(81,172,199)',
      borderColor: 'rgb(81,172,199)',
      data: [0, 10, 2, 13, 45, 45, 30]
    }]
  },

  // Configuration options go here
  options: {}
});
