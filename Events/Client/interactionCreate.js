const profileModel = require('../../Models/profileSchema')

module.exports = async(Discord, client) => {

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
        inventory: []
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }

  command.execute(Discord, client, profileData)
}