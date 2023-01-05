const profileModel = require("../../Models/profileSchema");
module.exports = {
  name: "give",
  aliases: [],
  permissions: [],
  description: "give a player some cash",
  async execute(message, args, cmd, client, discord, profileData) {
    const role = message.guild.roles.cache.find(r => r.id === "565275714035646475" );

        const User = message.author;
        if(!message.member.roles.cache.has("565275714035646475"))
            return (message.reply(`You're not allowed to use this command!`));

            else
            !message.member.roles.cache.has(role) 

    if (!args.length) return message.channel.send("You need to mention a player to give them coins");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");

    

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This user doens't exist in the db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send(`This player has been given ${amount} of cash!`);
    } catch (err) {
      console.log(err);
    }
  },
};
