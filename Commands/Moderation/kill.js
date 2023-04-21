const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'solkill',
    aliases: [''],
    permissions: 'MANAGE_CHANNELS',
    description: "turns the bot off",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        const role = ("565275714035646475");
         
        if (message.member.roles.cache.has(role)) {
            process.exit();
        } else 
            message.channel.send("You do not have the correct roles for that action!");

    }}