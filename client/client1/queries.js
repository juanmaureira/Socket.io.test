const axios = require('axios').default
const baseUrl = 'http://localhost:3000/'

headers = {"content-type": "application/json"}

const updateOrderApi =  async ( url, data )  => await axios.get( baseUrl + url, { params:data } )

module.exports = {
    updateOrderApi
}