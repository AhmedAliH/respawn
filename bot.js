const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("555081888138526735")
setInterval(function() {
channel.send(`سبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
