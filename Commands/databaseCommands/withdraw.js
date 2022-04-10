const profileModel = require("../../Models/profileSchema");

module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("__Withdraw amount must be a whole number!__");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of cash to withdraw!`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`You withdrew **$${amount}** into your wallet!`);
    } catch (err) {
      console.log(err);
    }
  },
};
