var Web3 = require('Web3')
var axios = require('axios')
var web3 = new Web3('HTTP://127.0.0.1:7545')
var EthereumTransaction = require("ethereumjs-tx")
var sendingAddressPublicKey = '0x48e74B904c1729D4bfDF7BcbeC08e1029230f88D'
var sendingAddressPrivateKey = '54ca6b20ded9f46ed7de453b0d73b4058d3298f100bfc032a95c1cc15c6791c6'
var sendingAddressPrivateKeyHex = Buffer.from('54ca6b20ded9f46ed7de453b0d73b4058d3298f100bfc032a95c1cc15c6791c6', 'hex')
var receivingAddressPublicKey = '0x70e0dB3F42652C97A6D11CAAf133208EbD41f65b'

const getCurrentGasPrices = async () => {
    let 
    
    response = await axios('https://ethgasstation.info/json/ethgasAPI.json')

    console.log('response', response.data)

    let prices = {
        low: response.data.safeLow / 10,
        medium: response.data.average / 10,
        high: response.data.fast / 10
    }
    
    // log('Current ETH Gas Prices (in GWEI):');
    // log(`Low: ${prices.low} (transaction completes in < 30 minutes)`);
    // log(`Standard: ${prices.medium} (transaction completes in < 5 minutes)`);
    // log(`Fast: ${prices.high} (transaction completes in < 2 minutes)`);
    
    console.log(prices)

    return prices
}


(async function() {

    let prices = await getCurrentGasPrices()
    console.log('prices', prices)
    let gas = prices.high * 1000000000

    console.log('prices.high', prices.high)
    console.log('gas', gas)

    let val, val1
    // var x = 1000000000000000000
    val = web3.utils.toWei('1', 'ether')
    val1 = parseInt(val)

    // console.log(typeof val, typeof val1)
    // console.log(val, val1, val === val1)

    let transaction
    let serializedTransaction
    let gasPrice, gasPrice1, gasPrice2

    gasPrice1 = 20000000
    gasPrice2 = gas

    val = web3.utils.toWei('1', 'ether')

    console.log('prices', gasPrice1, gasPrice2)
    transaction = new EthereumTransaction({
        nonce: 8,
        to: receivingAddressPublicKey,
        gasPrice: gasPrice2,
        gasLimit: 30000,
        value: val1,
        data: ""
    })

    transaction.sign(sendingAddressPrivateKeyHex)
    // serializedTransaction = transaction.serialize()

    // let bal
    // bal = await web3.eth.getBalance(sendingAddressPublicKey)
    // console.log('bal', bal)
    // console.log(`1 sending ${web3.utils.fromWei(bal, 'ether')}`)
    // bal = await web3.eth.getBalance(receivingAddressPublicKey)
    // console.log(`1 receiving ${web3.utils.fromWei(bal, 'ether')}`)
    // console.log(web3.utils.fromWei('1096934302059488651232480448211092358311813168', 'ether'))
    // let c
    // try {
    //     x = await web3.eth.sendSignedTransaction(serializedTransaction)
    //     console.log('x', x)
    // } catch (err) {
    //     console.log('err', err)
    // }

    // bal = await web3.eth.getBalance(sendingAddressPublicKey)
    // console.log(`2 sending ${web3.utils.fromWei(bal, 'ether')}`)
    // bal = await web3.eth.getBalance(receivingAddressPublicKey)
    // console.log(`2 receiving ${web3.utils.fromWei(bal, 'ether')}`)
}())







