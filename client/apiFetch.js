const { updateOrderApi } = require('./client1/queries')

const apiFetch = async () => {
    try{
        return await updateOrderApi( 'users', {id:1} )        
    }catch(e){
        return e.code
    }
}

module.exports = {
    apiFetch
}