const profileModel = require("../../Models/profileSchema");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = parseInt(args[0]);
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("__Deposit amount must be a whole number!__");
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that amount of cash to deposit!`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`You deposited **${amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}** into your bank!`);
    } catch (err) {
      console.log(err);
    }
  },
};
