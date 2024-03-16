const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'clearinv',
     category: 'clears from your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        var invArr = profileData.inventory.map(x => x._id);

        for(var i = 0; i < invArr.length; i++){
            if(profileData.inventory.find(item => item.id === invArr[i])){
                profileData.inventory.pull({ _id: invArr[i]});
            }
            continue;
        }
        message.reply(`**Inventory cleared!**`);
        profileData.save();
    }
}