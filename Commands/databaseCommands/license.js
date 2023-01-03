/*const { Interaction } = require('discord.js');
const { invalid } = require('moment');
const items = require('../../items.json')
const ProfileModels = require('../../Models/profileSchema')
const profileData = require('../../Events/Message/messageCreate')

module.exports = {
     name: 'add3',
     category: 'adds to your inv',
        
    async execute(message, args, commandName, client, Discord, profileData) {
        let test = args.slice().join(' '); 
        let item = items.itemList.map(test => test.name);
        let addItem = profileData.licenses.find(itemName => itemName._id === addItem);

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
         if(!profileData.licenses.find(itemName => itemName._id === item)){
            profileData.licenses.push({_id: item});
            profileData.save();
        }else{
            let counter = getCount(item);
            await ProfileModels.findOneAndUpdate({
                userId: message.author.id, 
                "licenses._id": item
            }, {
                $set: {
                    "licenses.$.count": counter
                }
            })
        }

            message.reply(`Added ${item} to your licenses inventory`);
        }
    }*/