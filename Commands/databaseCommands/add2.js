const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'add',
     category: 'adds to your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        let item = items.itemList.map(x => x.name);
        let addItem = args.slice().join(' ');

        function getCount(_id){
            let count;
            profileData.inventory.find(itemName => {
                if(itemName._id === _id){
                    count = parseInt(itemName.count);
                }else{
                    return;
                }
            }); 
            count - count + 1;
            return count;
        }
         if(!profileData.inventory.find(itemName => itemName._id === addItem)){
            profileData.inventory.push({_id: addItem, count: 1});
            profileData.save();
        }else{
            let counter = getCount(addItem);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                "inventory._id": addItem
            }, {
                $set: {
                    "inventory.$.count": counter
                }
            })
        }

            message.reply(`Added ${addItem} to your inventory`);
        }
    }