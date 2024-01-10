const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'roll',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "rolls 1 - 20",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const author = message.author;
        const dTwenty = Math.floor(Math.random() * 21) + 1;
        const dOneHundred = Math.floor(Math.random() * 101) + 1;

        let str = args.slice();

        if(str == "d20"){
            message.reply(`${author} has rolled a **${dTwenty}!**`);
        }

        if(str == "d100"){
            message.reply(`${author} has rolled a **${dOneHundred}!**`); 
        }
    }}