var Web3 = require('Web3')
var axios = require('axios')
var provider = new Web3.providers.HttpProvider("http://localhost:7545")
var web3 = new Web3(provider)
var compiled = require('../backend/build/contracts/Message.json')
const myAddress = "0x48e74B904c1729D4bfDF7BcbeC08e1029230f88D"

;(async () => {	
	let contract, gasPrice, estimatedGas, deployOptions, deployedInstance
	
	contract = new web3.eth.Contract(compiled.abi, null, {
		data: compiled.bytecode
	})

	deployOptions = { arguments: ["cody is so special"]}

	try {
		gasPrice = await web3.eth.getGasPrice()
		estimatedGas = await contract.deploy(deployOptions).estimateGas()

		// console.log(gasPrice, estimatedGas, typeof)

		deployedInstance = await contract.deploy(deployOptions).send({
			from: myAddress,
			gasPrice: gasPrice, 
			gas: estimatedGas * 2
		})
		
		console.log("Contract mined at " + deployedInstance.options.address)
	} catch (err) {
		console.error('error', err)
	}

	const message = await contract.methods.getTheMessage.call()
	console.log('special message', message)
})()







