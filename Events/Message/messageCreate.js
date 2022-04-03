const { Client, Message, MessageEmbed, Collection } = require('discord.js');
const { Prefix } = require('../../config.json');
const profileModel = require("../../Models/profileSchema");

module.exports = {
    name: "messageCreate",
    /**
     * @param {Client} client
     * @param {Message} message 
     */
    async execute(message, client, Discord) {

        if (!message.content.startsWith(Prefix) || message.author.bot) return;

        let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }
        
        const args = message.content.slice(Prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if(!command) return;

        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                const NoPerms = new MessageEmbed()
                .setColor('RED')
                .setDescription(`You do not have the required permissions to run this command!`)
                message.channel.send({embeds: [NoPerms]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 2000)
                })
            };
        };

        const { cooldowns } = client;
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        };

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                const timeLeftEmbed = new MessageEmbed()
                .setColor('RED')
                .setDescription(`Please wait another ${timeLeft.toFixed(1)} more seconds to be able to run this command again!`)
                return message.channel.send({embeds: [timeLeftEmbed]})
                .then((sent) => {
                    setTimeout(() => {
                        sent.delete();
                    }, 3000);
                });
            };
        };

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            command.execute(message, args, commandName, client, Discord, profileData);
        } catch (error) {
            console.log(error);
            const ErrorEmbed = new MessageEmbed()
            .setColor('RED')
            .setDescription(`An error happened while trying to run this command, please contact staff about the issue!`)
            message.channel.send({embeds: [ErrorEmbed]});
        };
    }
}

            