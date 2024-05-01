const profileModel = require("../../Models/profileSchema");
module.exports = {
  name: "pay",
  aliases: [],
  permissions: [],
  description: "give a player some cash",
  async execute(message, args, cmd, client, discord, profileData) {
    
    const User = message.author;

    if (!args.length) return message.channel.send("You need to mention a player to give them coins");
    let amount = parseInt(args[1]);
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("That user does not exist");


    try {
        const lenderData = await profileModel.findOne({ userID: User.id });
        if (amount > profileData.coins) return message.channel.send(`Insufficient Balance!`);
        if (!lenderData) return message.channel.send(`This user doens't exist in the db`);
  
        await profileModel.findOneAndUpdate(
          {
            userID: User.id,
          },
          {
            $inc: {
              coins: -amount,
            },
          }
        );
  
        return message.channel.send(`This player has been paid ${amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}!`);
      } catch (err) {
        console.log(err);
      }
  },
};