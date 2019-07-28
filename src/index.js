const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NjA1MTQzMTA1NDE0MzY1MjA3.XT4RdA.KYShVbzNQNchUvkswVbBvAqmb6U';

const prefix = '?';

// Gives a message that therbot is working
bot.on('ready', () =>{
    console.log('bot is working')
});

bot.on('message', msg => {
    if(!msg.content.startsWith(prefix)) {
        return
    }
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    console.log(args);

    if(command === 'uptime'){
        msg.channel.bulkDelete(1);
        msg.channel.send("mY fUcKiNg UpTiMe!");
    }
    if(command === 'dps'){
        msg.channel.bulkDelete(1);
        msg.channel.send("You have been queued as a dps.")
    }
    if(command === 'clear'){
        let num = 1;
        if(args[0]){
            num = parseInt(args[0]) + 1;
        }
        if(num <= 1){
            msg.channel.bulkDelete(1);
            msg.channel.send('Please provide a value greater than 0.');
        }else{
            msg.channel.bulkDelete(num);
            msg.channel.send(`Apex bot deleted ${num - 1} messages for you`);
        }
    }
    if(command === 'help'){
        msg.channel.bulkDelete(1);
        msg.channel.send(
            '```Commands: \n?uptime: gives a nice response for you \n?dps: queues you as dps (in progress) \n?clear n: Clears N messages```'
        )
    }
    if(command === 'rachel'){
        msg.channel.bulkDelete(1);
        msg.channel.send('Rachel is clearly best girl.');
    }
})


bot.login(token)