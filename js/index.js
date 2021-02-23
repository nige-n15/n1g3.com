$(document).ready( function () {

	//Get Crypto Prices and Market Caps in GBP for Featured Cryptocurrenciess
	getGecko();

});

function getGecko(){
	let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cmonero%2Cpolkadot%2Ckusama%2Cbitcoin-cash&vs_currencies=gbp&include_market_cap=true&include_24hr_change=true"

	$.get(url, function(data,status){
		let jsonData = JSON.stringify(data)
		setGecko(jsonData)
	});

}

function setGecko(data){
	//info = data.replace('"bitcoin-cash"',"bitcoincash")
	//console.log(info)
	info = JSON.parse(data);
	//BTC
	let btc_price = info.bitcoin.gbp;
	let btc_24h = info.bitcoin.gbp_24h_change;
	let btc_mcap = info.bitcoin.gbp_market_cap
	btc_mcap=btc_mcap.toLocaleString()
	//ETH
	let eth_price = info.ethereum.gbp;
	let eth_24h = info.ethereum.gbp_24h_change;
	let eth_mcap = info.ethereum.gbp_market_cap
	eth_mcap=eth_mcap.toLocaleString();
	//XMR
	let xmr_price = info.monero.gbp;
	let xmr_24h = info.monero.gbp_24h_change;
	let xmr_mcap = info.monero.gbp_market_cap
	xmr_mcap = xmr_mcap.toLocaleString()
	//BCH
	let bch_price = info["bitcoin-cash"].gbp;
	let bch_24h = info["bitcoin-cash"].gbp_24h_change;
	let bch_mcap = info["bitcoin-cash"].gbp_market_cap
	bch_mcap = bch_mcap.toLocaleString()
	//KSM
	let ksm_price = info.kusama.gbp;
	let ksm_24h = info.kusama.gbp_24h_change;
	let ksm_mcap = info.kusama.gbp_market_cap
	ksm_mcap = ksm_mcap.toLocaleString()
	//DOT
	let dot_price = info.polkadot.gbp;
	let dot_24h = info.polkadot.gbp_24h_change;
	let dot_mcap = info.polkadot.gbp_market_cap
	dot_mcap= dot_mcap.toLocaleString()

	$('#btc_price').html(btc_price.toFixed(2));
	$('#eth_price').html(eth_price.toFixed(2));
	$('#xmr_price').html(xmr_price.toFixed(2));
	$('#ksm_price').html(ksm_price.toFixed(2));
	$('#dot_price').html(dot_price.toFixed(2));
	$('#bch_price').html(bch_price.toFixed(2));

	$('#btc_mcap').html(btc_mcap);
	$('#eth_mcap').html(eth_mcap);
	$('#xmr_mcap').html(xmr_mcap);
	$('#bch_mcap').html(ksm_mcap);
	$('#dot_mcap').html(dot_mcap);
	$('#ksm_mcap').html(ksm_mcap);
}