const profileModel = require("../../Models/profileSchema");

module.exports = async (client, discord, member) => {
 let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 0,
    bank: 0,
    inventory: []
  });
  profile.save();
};

module.exports = {
  async execute (client) {

    const test = new MessageEmbed()
    .setTitle('A new member has appeared!')
    .setDescription(`Welcome <${user.id}> to the server!`)
      .setColor('ORANGE')
	    .setFooter(`${message.guild.memberCount}`)
	    .setTimestamp(message.createdTimestamp)
      .addFields([{
        name: 'Wallet Balance',
        value: `You have **$${user.coins}**`
    }, { 
        name: 'Bank Balance',
        value: `You have **$${user.bank}**`,
        inline: true
    }]);
    
    client.channels.cache.get('560019110365495296').send(test);
  }
}