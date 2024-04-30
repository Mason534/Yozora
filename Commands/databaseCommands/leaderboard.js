const { MessageEmbed } = require("discord.js");
const profileModel = require("../../Models/profileSchema");

module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    permissions: 'SEND_MESSAGES',
    description: "Displays the top 10 users with the most money",
    async execute(message, args, commandName, client, Discord) {
        try {
            // Query the database for the top 10 users with the most money
            const topUsers = await profileModel.find({}).sort({ bank: -1 }).limit(10);

            // Log the number of users fetched
            console.log(`Number of users fetched: ${topUsers.length}`);

            // Check if there are users in the top list
            if (topUsers.length === 0) {
                return message.channel.send('No users found in the leaderboard.');
            }

            // Fetch usernames for the top users
            const userPromises = topUsers.map(async (user) => {
                const discordUser = await client.users.fetch(user.userID);
                return discordUser.username;
            });

            // Resolve all username promises
            const usernames = await Promise.all(userPromises);

            // Create a message embed to display the leaderboard
            const leaderboardEmbed = new MessageEmbed()
                .setColor('#00FF00')
                .setTitle('Top 10 Users with the Most Money')
                .setDescription("Sorted by Bank amount")
                .setFooter(`Can you reach the top? || Creator knarFennA#6313`)
                .setTimestamp();

            // Add each user to the embed
            topUsers.forEach((user, index) => {
                leaderboardEmbed.addFields({
                    name: `${index + 1}. ${usernames[index]}`,
                    value: `Wallet Balance: ${user.coins.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}\nBank Balance: ${user.bank.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`,
                    inline: true
                });
            });

            // Send the embed to the channel
            message.channel.send({ embeds: [leaderboardEmbed] });
        } catch (err) {
            console.error('Error fetching leaderboard:', err);
            message.channel.send('An error occurred while fetching the leaderboard. Please try again later.');
        }
    }
};
