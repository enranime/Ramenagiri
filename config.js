require('dotenv').config();


module.exports = {
    port: process.env.PORT || 3000,
    token:process.env.TOKEN,
    guildId:process.env.GUILDID,
    clientId:process.env.CLIENTID
    
}