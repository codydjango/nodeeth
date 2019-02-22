// var address = '0x77b4acc38da51a0e77c77355cfd28c1a6619f6ba'
// web3.eth.getBalance(address, (err, bal) => {
// 	console.log('bal', bal)
// 	balance = bal
// })
// 
// var address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

var Web3 = require('Web3');
const INFURA_PROJECT_ID = "c63d2ec360ce413ea4dc8b10e0cf1fac";
const INFURA_PROJECT_SECRET = "6ade39ef211843e3b4805ff28f45af91";
const INFURA_ENDPOINT = "https://ropsten.infura.io/v3/c63d2ec360ce413ea4dc8b10e0cf1fac";
var web3 = new Web3(INFURA_ENDPOINT);
const contractAddress = '0x77b4acc38da51a0e77c77355cfd28c1a6619f6ba';
const abi = [{"constant":true,"inputs":[{"name":"situation","type":"uint256"}],"name":"get_author","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"fromSituation","type":"uint256"},{"name":"fromChoice","type":"uint256"}],"name":"get_next_situation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"fromSituation","type":"uint256"},{"name":"fromChoice","type":"uint256"},{"name":"situationText","type":"string"},{"name":"choiceTexts","type":"bytes32[]"}],"name":"add_situation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"signature","type":"string"}],"name":"add_signature","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get_pathwayCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"situation","type":"uint256"}],"name":"get_signature","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"situationText","type":"string"},{"name":"choiceTexts","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"uint256"},{"indexed":false,"name":"situationText","type":"string"},{"indexed":false,"name":"choiceTexts","type":"bytes32[]"}],"name":"Situation","type":"event"}];
contract = web3.eth.Contract(abi, contractAddress);

contract.methods.get_pathwayCount.call().then(function(result) {
	console.log('result', result)
}).catch(function(err) {
	console.log('err', err)
})

// console.log('x', x)
// .then(function() {
// 	console.log('here', arguments)
// }).catch(function(err) {
// 	console.log('err', err)
// })