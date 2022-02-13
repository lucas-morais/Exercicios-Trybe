const axios = require('axios')

const URI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'

async function getPrice(req, res) {
  const btc = await axios.get(URI);
  res.status(200).json(btc.data)
}

module.exports = getPrice;