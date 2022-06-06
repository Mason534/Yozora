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