var Web3 = require('Web3')
var axios = require('axios')
var provider = new Web3.providers.HttpProvider("http://localhost:7545")
var address = '0xF72bcF195A17E5297a5bf0693e3d337DBb87160F'
var web3 = new Web3(provider)

var abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "cody",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]

;(async () => {
	const contract = new web3.eth.Contract(abi, address)
	const answer = await contract.methods.cody.call()
	console.log(answer)
})()







