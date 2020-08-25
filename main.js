var key;
var quoteContainer = document.querySelector(".quote-container > p");
var usdollarData = document.querySelector(".usdollar-data");
var bitcoinData = document.querySelector(".bitcoin-data");
var ethereumData = document.querySelector(".ethereum-data");
var litecoinData = document.querySelector(".litecoin-data");
var inputData = document.querySelector(".input-dollar-amount");
var dollarButton = document.querySelector(".us-button")
var errorButton = document.querySelector(".error-info");
var errorModal = document.querySelector(".error-modal");
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
  },
  error: data => {
    errorModal.classList.remove('hidden');
  }
})

$.ajax({
  type: "GET",
  url: "https://quote-garden.herokuapp.com/api/v2/quotes/random",
  success: data => {
    var quoteData = data.quote.quoteText;
    quoteContainer.textContent = quoteData;
  },
  error: data => {
    errorModal.classList.remove('hidden');
  }
})

inputData.addEventListener("input", dollarConverter)
document.addEventListener('load', function () {
  var loader = document.querySelector('.loader');
  loader.className += ' hidden';
})
errorButton.addEventListener("click", function () {
  errorModal.classList.add('hidden');
})

function dollarConverter(event) {
  var dollarAmount = event.target.value;
  if (!event.target.value) {
    (dollarAmount = 1)
  }

  var newBitcoin = dollarAmount * bitcoinInfo;
  var newEthereum = dollarAmount * ethereumInfo;
  var newLitecoin = dollarAmount * litecoinInfo;

  bitcoinData.textContent = newBitcoin.toFixed(5);
  ethereumData.textContent = newEthereum.toFixed(5);
  litecoinData.textContent = newLitecoin.toFixed(5);
}
