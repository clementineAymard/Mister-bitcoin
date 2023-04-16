import axios from 'axios';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate() {
    const rate = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    return rate.data
}

function getMarketPrice() {

}

function getConfirmedTransactions() {

}

