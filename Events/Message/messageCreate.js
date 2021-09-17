const { Client, Message, Collection, MessageEmbed } = require('discord.js');
const { Prefix } = require('../../config.json');

module.exports = {
    name: "messageCreate", 
    /**
     * @param {Client} client
     * @param {Message} message
     */
    async execute(message, client, Discord) {
        if (message.author.bot) return;

        const args = message.content.slice(Prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) message.reply("That is not a valid command!");

        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                message.reply("You do not have the correct permissions for that!")
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 3000)
                })
            }

        }

    const { cooldowns } = client;
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 2000; 

    if(timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 2000;
            const timeLeftEmbed = new MessageEmbed() 
            .setColor('FF6F52')
            .setDescription(`Please wait another ${timeLeft.toFixed(1)} more seconds to be able to run this command again!`)
            return message.reply({embeds: [timeLeftEmbed]})
            .then((sent) => {
                setTimeout(() => {
                    sent.delete();
                }, 2000)
        });
        };
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            command.execute(message, args, commandName, client, Discord);
        }catch (error) {
            console.log(error);
            const ErrorEmbed = new MessageEmbed()
            .setColor('FF6F52')
            .setDescription('You have broken the Solaris Bot, congratulations.')
            message.channel.send({embeds: [ErrorEmbed]});
        }
    };
}}