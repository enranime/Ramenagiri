// Require the necessary discord.js classes
const { Client, Intents, Guild, BaseGuild, AnonymousGuild, Message } = require('discord.js');
const config = require('../config')
const express = require("express");
const app = express();

// Create a new client instance
const allIntents = new Intents(32767);
const client = new Client({intents:[allIntents]});



app.get('/',(req,res,next) => {
	res.status(200).send("Hello World");
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('anime',{type:'WATCHING'});
});


client.on("ready", async () => {

	const user = await client.user.fetch('841750688089899028')
	const channel = client.channels.cache.get('972716658395320393');
	console.log(channel);

})
	

client.on("apiRequest", async req => {
	
	
})

client.on("messageCreate", async message => {
	if(message.author.bot) return;
	if(message.content ==="delete") {
		message.reply(`Roger~`);
		await message.channel.bulkDelete(100);
	} 
	if(message.content ==="Hi"){
		message.reply(`Hi ${message.author.username}`);
		
	}

	console.log(client.guilds.cache.map((guild) => guild.name).join('\n'))
	
	
})

client.on('interactionCreate', async interaction => 
{
	if (!interaction.isCommand()) return;
	

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
		console.log(interaction.member);
	} else if (commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id} \ntimestamp:${interaction.user.createdAt}`);
	}

});



// Login to Discord with your client's token
client.login(config.token);


module.exports = app;