const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'solkill',
    aliases: [''],
    permissions: 'MANAGE_CHANNELS',
    description: "turns the bot off",
    cooldown: 3,
    execute(message, args, commandName, client, Discord) {

        process.exit();

    }}