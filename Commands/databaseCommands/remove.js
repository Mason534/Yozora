const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'remove',
     category: 'removes from your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        let addItem = args.join(' ').toLowerCase().trim();
        let addItemArray = addItem.split(',').map(item => item.trim());


        for(let i = 0; i < addItemArray.length; i++){
            if(!profileData.inventory.find(itemName => itemName._id === addItemArray[i])){
                return message.reply("You do not have this item");
            }else{ 
                profileData.inventory.pull({ _id: addItemArray[i], count: 1});
            }
        }
        message.reply(`Removed ${addItemArray.join(', ')} from your inventory`);
        profileData.save();
    }}