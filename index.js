const Discord = require('discord.js');

const bot = new Discord.Client();

const Landon = "140205912727093248";
const Tanner = "379807275877138443";

const commandCooldown = new Set();
const landonCooldown = new Set();
//var d = new Date(); //current time

let token = process.env.discordToken;



bot.on('ready', () => {

    console.log('This bot is online!');

})

//auto roles
bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'spam');

    if(!channel)
    { 
    console.log("Could not find Spam") 
    return;
    }

    console.log(`Welcome to the server, ${member}`);
    channel.send(`Welcome to the server, ${member}`);

    member.roles.set(['643678930754076712'])
        .then(console.log)
        .catch(console.error);
})


bot.on('message', msg => {
    if (msg.content === "HELLO") {
        if (commandCooldown.has(msg.author.id)) {
            msg.reply("Wait 1 minute before using this command")
        } else {
            msg.reply('HELLO FRIEND');
            // Adds the user to the set so that they can't talk for a minute
            commandCooldown.add(msg.author.id);
            setTimeout(() => {
                // Removes the user from the set after a minute
                commandCooldown.delete(msg.author.id);
            }, 60000);
        }
    }
})


/*
bot.on('message', msg => {
    var d = new Date(); //current time
    //console.log(d.getHours());

    if (msg.author.id === Landon && (d.getHours() >= 3 && d.getHours() <= 11)) {
        //msg.reply('Mock Landon');
        msg.reply('https://cdn.discordapp.com/attachments/751951417207422976/752783620099276921/SmartSelect_20200907-055103_Twitter.png');
    }
})
*/

bot.on('message', msg => {
    var d = new Date(); //current time
    //console.log('Here');
    console.log(d.getHours());
    if (msg.author.id === Tanner && msg.content === "!serverTime") {
        //msg.reply('Mock Landon');
        msg.reply(d.getHours());
    }
})


bot.login(token);