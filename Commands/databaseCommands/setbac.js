const profileModel = require("../../Models/profileSchema");
module.exports = {
  name: "setbac",
  aliases: [],
  permissions: [],
  description: "give a player some cash",
  async execute(message, args, cmd, client, discord, profileData) {

    if (!args.length) return message.channel.send("You need to mention a player to give them coins");
    const amount = args[0];
    const target = message.author;
    if (!target) return message.channel.send("That user does not exist");

    

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $set: {
            bac: amount,
          },
        }
      );

      return message.reply(`**BAC set** :saluting_face:`);
    } catch (err) {
      console.log(err);
    }
  },
};