/*const { MessageEmbed, User } = require("discord.js");
const model = require("../../Models/profileSchema");
const profileModel = require("../../Models/profileSchema");

module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    permissions: [],
    description: "Leaderboard",
    async execute(message, args, commandName, client, Discord, profileData) {
        
        const users = await profileModel.find().then(users => {
            return users.filter(async user => await message.guild.members.cache.get(user.id))
        })
        
        const sortedUsers = users.sort((a, b) => {
            return(b.wallet + b.bank) - (a.wallet + a.bank)
        }).slice(0, 10)
  
        const Response = new MessageEmbed()
        .setAuthor(`${message.guild.name}'s leaderboard!`)
        .setColor('ORANGE')
        .setDescription(sortedUsers.map((user, index) => {
            return `**\`[ ${index + 1} ]\`** : **<@${user.serverID}>** : \` ${user.coins + user.bank} \``
        }).join("\n"))
	    .setFooter(`Goodluck!`)
	    .setTimestamp(message.createdTimestamp);
      
    message.channel.send({embeds: [Response]})

    }}      */ 