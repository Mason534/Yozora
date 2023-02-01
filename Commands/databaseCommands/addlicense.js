const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'addlicense',
     category: 'adds to your inv',
        
     async execute(message, args, commandName, client, Discord, profileData) {
        let item = items.itemList.map(x => x.name);
        let addItem = args.slice().join(' ');

        function getCount(_id){
            let count;
            profileData.licenses.find(itemName => {
                if(itemName._id === _id){
                    count = parseInt(itemName.count);
                }else{
                    return;
                }
            }); 
            count - count + 1;
            return count;
        }
         if(!profileData.licenses.find(itemName => itemName._id === addItem)){
            profileData.licenses.push({_id: addItem, count: 1});
            profileData.save();
        }else{
            let counter = getCount(addItem);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                "licenses._id": addItem
            }, {
                $set: {
                    "licenses.$.count": counter
                }
            })
        }

            message.reply(`Added ${addItem} to your licenses`);
        }
    }