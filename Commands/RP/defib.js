const { MessageMentions } = require("discord.js");

module.exports = {
    name: 'defib',
    aliases: [''],
    permissions: 'SEND_MESSAGES',
    description: "cuffs the mentioned player",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const Target = message.mentions.users.first() || message.author;

        message.reply(`${Target} is now receiving 150 joules! Step away!`)
        .then((msg) => {
            setTimeout(function() {
            msg.channel.send(`**ZAP!**`);
          }, 2000)

    })}}