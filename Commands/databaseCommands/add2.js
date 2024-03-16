const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
    name: 'add',
    category: 'adds to your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        let addItem = args.join(' ').toLowerCase().trim();
        let addItemArray = addItem.split(',').map(item => item.trim());

        async function getCount(_id) {
            let item = profileData.inventory.find(itemName => itemName._id === _id);
            if (item) {
                return parseInt(item.count);
            } else {
                return 0; 
            }
        }

        for(let i = 0; i < addItemArray.length; i++) {
            let counter = await getCount(addItemArray[i]);
            if (counter === 0) {
                profileData.inventory.push({_id: addItemArray[i], count: 1});
            } else {
                counter += 1;
                await ProfileModels.findOneAndUpdate({
                    userId: message.author.id, 
                    "inventory._id": addItemArray[i]
                }, {
                    $set: {
                        "inventory.$.count": counter
                    }
                });
            }
        }

        profileData.save();
        message.reply(`Added ${addItemArray.join(', ')} to your inventory`);
    }
}
