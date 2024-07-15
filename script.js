var btc = document.getElementById('bitcoin');
var btc = document.getElementById('ethereum');
var btc = document.getElementById('dogecoin');


var settings ={
	"async": true,
	"scrossDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Centhereum%2Cdogecoin&vs_currencies=usd",
	"method": "GET",
	"header":{}
}
$.ajax(settings).done(function (response){
	btc.innerHTML = response.bitcoin.usd;
	eth.innerHTML = response.ethereum.usd;
	doge.innerHTML = response.dogecoin.usd;
	});
